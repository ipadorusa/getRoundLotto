process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const makeJson = require("./makeJson");
const getRoundResult = require("./getRoundResult");
const divide = require("./divide");

async function loopFnc(listArray) {
  const list = [];
  listArray.map((el) => {
    list.push(getRoundResult(el[0], el[1]));
  });
  return Promise.all(list).then((res) => res);
}

(async () => {
  const listArray = divide(300, 1054);
  const result = await loopFnc(listArray);
  makeJson("a.json", result);
})();
