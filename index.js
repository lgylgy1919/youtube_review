// 파일 목록 및 node module로부터 express를 요구(require)한다. import를 해도 된다.
const express = require("express");
// application을 만든다.
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}

//port=4000에 접근하면, 콜백함수로 handleListening을 실행한다.
app.listen(PORT, handleListening);
