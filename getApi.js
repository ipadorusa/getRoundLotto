const axios = require("axios");

async function callApi(i) {
  let errIdx = [];
  try {
    const response = await axios(
      `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${i}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("error", i);
  }
}

module.exports = callApi;
