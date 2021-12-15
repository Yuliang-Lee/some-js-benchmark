const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('s1');
// const n = new Array(100000).fill('n');
const diffValues = {}
const sameValues = {}
for (let i = 0; i < 1000; i++) {
  diffValues[`${Math.random()}-key`] = Math.random();
}
for (let i = 0; i < 1000; i++) {
  sameValues[`${Math.random()}-key`] = 'test string'
}


suite
.add('spread operator | diffValues', function() {
  const temp = {
    ...diffValues
  }
  return temp
})
.add('spread operator | sameValues', function() {
  const temp = {
    ...sameValues
  }
  return temp
})
.add('Object.assign | diffValues', function() {
  const temp = Object.assign({}, diffValues)
  return temp
})
.add('Object.assign | sameValues', function() {
  const temp = Object.assign({}, sameValues)
  return temp
})
.add('for in | diffValues', function() {
  const temp = {}
  for (const key in diffValues) {
    if (Object.hasOwnProperty.call(diffValues, key)) {
      temp[key] = diffValues[key];
    }
  }
  return temp
})
.add('for in | sameValues', function() {
  const temp = {}
  for (const key in sameValues) {
    if (Object.hasOwnProperty.call(sameValues, key)) {
      temp[key] = sameValues[key];
    }
  }
  return temp
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
.run({ 'async': true, 'queued': true });
