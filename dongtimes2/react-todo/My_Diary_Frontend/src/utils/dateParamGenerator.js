const dateParamGenerator = (year, month, date) => {
  if (year && month && date) {
    return `${year}${('0' + month).slice(-2)}${('0' + date).slice(-2)}`;
  }
};

export default dateParamGenerator;
