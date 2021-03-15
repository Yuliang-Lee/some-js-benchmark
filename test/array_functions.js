const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('push');
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
const simpleArr = getRamdomArr(10000, 1000);

suite
.add('10000 push', function() {
  const n = new Array(10000).fill(1);
  n.push(1);
})
.add('[]操作', function() {
  const n = new Array(10000).fill(1);
  n[n.length + 1] = 1
})
.add('splice add', function() {
  const n = new Array(10000).fill(1);
  n.splice(n.length, 0, 1)
})
.add('unshift', function() {
  const n = new Array(10000).fill(1);
  n.unshift(1)
})
.add('splice add first', function() {
  const n = new Array(10000).fill(1);
  n.splice(0, 0, 1)
})
.add('forEach push', function() {
  const arr = []
  simpleArr.forEach(item => {
    arr.push({a: item, b: '123'})
  })
  return arr;
})
.add('map', function() {
  let arr = []
  arr = simpleArr.map(item => {
    return {a: item, b: '123'}
  })
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
