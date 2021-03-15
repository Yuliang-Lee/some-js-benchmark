/**
 * array distinct methods
 */

const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const suite = new Benchmark.Suite('s1');
const getRamdomArr = (i, c) => {
  const arr = [];
  const complex = c || 100000; //数字越大，重复的越少
  let length = i || 100000; //控制数组长度
  while (length) {
    arr.push((Math.random() * complex).toFixed(0));
    length--;
  }

  return arr;
}
const complexArr = getRamdomArr(10000, 10000);
const simpleArr = getRamdomArr(10000, 1000);

function foreachIndexOfFun(arr) {
  var newArr = [];
  arr.forEach(item => {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  });

  return newArr;
}
function foreachObjectFun(arr) {
  const newArr = [];
  const obj = {};
  arr.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
      newArr.push(item);
    }
  });

  return newArr;
}
function forOfLoopObjectFun(arr) {
  const newArr = [];
  const obj = {};
  for (const item of arr) {
    if (!obj[item]) {
      obj[item] = 1;
      newArr.push(item);
    }
  };

  return newArr;
}
function forLoopIndexFun(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  };

  return newArr;
}
function forLoopObjectFun(arr) {
  const newArr = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!obj[item]) {
      obj[item] = 1;
      newArr.push(item);
    }
  };

  return newArr;
}
function foreachSetFun(arr) {
  const newArr = [];
  const obj = new Set();
  arr.forEach(item => {
    if (!obj.has(item)) {
      obj.add(item);
      newArr.push(item);
    }
  });

  return newArr;
}
function filterIndexOfFun(arr) {
  return arr.filter((val, i) => arr.indexOf(val) === i);
}
function filterObjectFun(arr) {
  const obj = {};
  return arr.filter((val, i) => !obj[val] && (obj[val] = 1));
}
function reduceIndexFun(arr) {
  const newArr = arr.reduce((newArr, current) => {
    if(newArr.indexOf(current) === -1) {
      newArr.push(current);
    }

    return newArr;
  }, []);

  return newArr;
}
function reduceObjectFun(arr) {
  const obj = {};
  var newArr = arr.reduce((newArr, current) => {
    if(!obj[current]) {
      obj[current] = 1;
      newArr.push(current);
    }

    return newArr;
  }, []);
}
function setFun(arr) {
  return Array.from(new Set(arr));
}


suite
.add('simpleArr: setFun', function() {
  setFun(simpleArr);
})
.add('simpleArr: forLoopIndexFun', function() {
  forLoopIndexFun(simpleArr);
})
.add('simpleArr: forLoopObjectFun', function() {
  forLoopObjectFun(simpleArr);
})
.add('simpleArr: forOfLoopObjectFun', function() {
  forOfLoopObjectFun(simpleArr);
})
.add('simpleArr: foreachSetFun', function() {
  foreachSetFun(simpleArr);
})
.add('simpleArr: foreachIndexOfFun', function() {
  foreachIndexOfFun(simpleArr);
})
.add('simpleArr: foreachObjectFun', function() {
  foreachObjectFun(simpleArr);
})
.add('simpleArr: filterIndexOfFun', function() {
  filterIndexOfFun(simpleArr);
})
.add('simpleArr: filterObjectFun', function() {
  filterObjectFun(simpleArr);
})
.add('simpleArr: reduceIndexFun', function() {
  reduceIndexFun(simpleArr);
})
.add('simpleArr: reduceObjectFun', function() {
  reduceObjectFun(simpleArr);
})
.add('complexArr: setFun', function() {
  setFun(complexArr);
})
.add('complexArr: forLoopIndexFun', function() {
  forLoopIndexFun(complexArr);
})
.add('complexArr: forLoopObjectFun', function() {
  forLoopObjectFun(complexArr);
})
.add('complexArr: forOfLoopObjectFun', function() {
  forOfLoopObjectFun(complexArr);
})
.add('complexArr: foreachSetFun', function() {
  foreachSetFun(complexArr);
})
.add('complexArr: foreachIndexOfFun', function() {
  foreachIndexOfFun(complexArr);
})
.add('complexArr: foreachObjectFun', function() {
  foreachObjectFun(complexArr);
})
.add('complexArr: filterIndexOfFun', function() {
  filterIndexOfFun(complexArr);
})
.add('complexArr: filterObjectFun', function() {
  filterObjectFun(complexArr);
})
.add('complexArr: reduceIndexFun', function() {
  reduceIndexFun(complexArr);
})
.add('complexArr: reduceObjectFun', function() {
  reduceObjectFun(complexArr);
})
.on('cycle', function (event) {
  benchmarks.add(event.target);
})
.on('start', function () {
  console.log('\n  node version: %s, date: %s\n  Starting...', process.version, Date());
})
.on('complete', function() {
  benchmarks.log();
  process.exit(0);
})
.run({ 'async': false });
