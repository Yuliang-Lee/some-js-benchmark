const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('s1');
const z = 0;

suite
.add('Math.min', function() {
  const n = Math.random()
  const x = Math.random()
  const r = Math.min(n, x)
  return r
})
.add('ternary operator', function() {
  const n = Math.random()
  const x = Math.random()
  const r = n > x ? x : n;
  return r
})
.add('not equal zero use !!', function() {
  const n = Math.random()
  return !!n
})
.add('not equal zero', function() {
  const n = Math.random()
  return n !== 0
})
.add('not equal x', function() {
  const n = Math.random()
  const x = Math.random()
  return n !== x
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
