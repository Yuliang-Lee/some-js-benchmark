const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const suite = new Benchmark.Suite('get current millisecond');

suite
.add('Date.now()', function() {
  Date.now();
})
.add('+new Date()', function() {
  +new Date();
})
.add('new Date().getTime()', function() {
  new Date().getTime();
})
.add('new Date().valueOf()', function() {
  new Date().valueOf();
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