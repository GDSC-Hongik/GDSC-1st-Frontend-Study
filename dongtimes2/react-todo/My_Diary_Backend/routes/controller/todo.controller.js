const { DateLog, Todo } = require('../../models/Todo');

exports.get = async (req, res, next) => {
  const dateLog = await DateLog.findOne({
    date: req.params.date,
  }).lean();

  res.json(dateLog);
};

exports.post = async (req, res, next) => {
  const todoDataList = req.body;

  const dateLog = await DateLog.findOne({
    date: req.params.date,
  });

  if (dateLog) {
    await dateLog.update({ todos: [] });

    for (const data of todoDataList) {
      const todo = new Todo({
        id: data.id,
        title: data.title,
        content: data.content,
        isChecked: data.isChecked,
        createdAt: data.createdAt,
        weather: data.weather,
      });

      await dateLog.update({ $push: { todos: todo } });
    }
  } else {
    const newDateLog = new DateLog({
      date: req.params.date,
    });

    await newDateLog.save();

    for (const data of todoDataList) {
      const todo = new Todo({
        id: data.id,
        title: data.title,
        content: data.content,
        isChecked: data.isChecked,
        createdAt: data.createdAt,
        weather: data.weather,
      });

      await newDateLog.update({ $push: { todos: todo } });
    }
  }

  res.json('status_ok');
};
