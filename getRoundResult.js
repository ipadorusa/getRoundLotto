const callApi = require("./getApi.js");

async function getRoundResult(start, end) {
  const resultArray = [];
  for (let i = start; i <= end; i++) {
    const result = await callApi(i);
    resultArray.push(result);
  }
  return resultArray;
}
module.exports = getRoundResult;
