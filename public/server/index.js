var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

var data = require("./server.json");
var field = JSON.parse(JSON.stringify(data.field));
var currentPlayer = 2;
var currentMove = [0, 0];
var winner = 0;

function defineMove(column, row) {
  currentMove = [column, row];
}

function checkWinColumn(column) {
  let testArr = Array(4).fill(currentPlayer);
  for (let i = 4; i < field[column].length + 1; i++) {
    if (
      JSON.stringify(field[column].slice(i - 4, i)) === JSON.stringify(testArr)
    ) {
      return currentPlayer;
    }
  }
}

function checkWinRow(row) {
  let testArr = Array(4).fill(currentPlayer);
  let rowArr = [];
  let counter = 0;
  while (counter < 7) {
    rowArr.push(field[counter][row]);
    counter++;
  }
  for (let i = 4; i < rowArr.length + 1; i++) {
    if (JSON.stringify(rowArr.slice(i - 4, i)) === JSON.stringify(testArr)) {
      return currentPlayer;
    }
  }
}

function checkWinner(moveCoords) {
  if (checkWinColumn(moveCoords[0]) || checkWinRow(moveCoords[1])) {
    winner = currentPlayer;
    return currentPlayer;
  }
}

function findPlace(column, places, newArray) {
  if (places[0] === 0) {
    newArray[column][0] = currentPlayer;
    defineMove(column, 0);
    return newArray;
  }
  for (let i = 1; i < places.length; i++) {
    if (places[i] === 0 && places[i - 1] > 0) {
      newArray[column][i] = currentPlayer;
      defineMove(column, i);
      return newArray;
    }
  }
}

function move(column) {
  var newField = [...field];

  currentPlayer = currentPlayer === 1 ? 2 : 1;

  findPlace(column, field[column], newField);

  field = [...newField];
}

app.get("/game-field", function (req, res) {
  res.send(field);
});
// 3 checks - from 0.0 to 0.3 and 4 checks - from 0.0 to 4.0
app.post("/move", function (req, res) {
  move(req.query.column);
  checkWinner(currentMove) === 1 || checkWinner(currentMove) === 2
    ? res.send({ currentPlayer, field, winner })
    : res.send({ currentPlayer, field });
});

app.post("/restart", function (req, res) {
  field = JSON.parse(JSON.stringify(data.field));
  currentPlayer = 2;
  res.send({field, currentPlayer});
});

app.listen(3001, function () {
  console.log("Connect 4 game server is running on port 3001!");
});
