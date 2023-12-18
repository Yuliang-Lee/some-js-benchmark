const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const _ = require('lodash');

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


suite
// .add('one level array spread clone', function() {
//   const n = [...simpleArr]
// })
// .add('one level array lodash cloneDeep', function() {
//   const n = _.cloneDeep(simpleArr)
// })
// .add('one level array lodash clone', function() {
//   const n = _.clone(simpleArr)
// })
.add('round with native Math Object', function() {
  const n = Math.random() * 100;
  return Math.round(n, 2);
})
.add('round with lodash round', function() {
  const n = Math.random() * 100;
  return _.round(n, 2);
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