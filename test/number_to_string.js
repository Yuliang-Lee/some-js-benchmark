const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('s1');
const n = 1;

suite
.add('concat', function() {
  const r = '' + n;
})
.add('es6 template literals', function() {
  const r = `${n}`;
})
.add('String constructor', function() {
  const r = String(n);
})
.add('Stirng to number with Number', function() {
  const r = Number('1')
})
.add('Stirng to number with plus', function() {
  const r = +'1'
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
