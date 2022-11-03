const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    isChecked: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    weather: {
      type: String,
      default: null,
    },
  },
  { versionKey: false },
);

const dateLogSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    todos: [todoSchema],
  },
  { versionKey: false },
);

const Todo = mongoose.model('Todo', todoSchema);
const DateLog = mongoose.model('Date', dateLogSchema);

module.exports = { Todo, DateLog };
