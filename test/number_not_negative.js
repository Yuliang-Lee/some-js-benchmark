/**
 * compare two way that check a number whether bigger than -1
 */

const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('s1');
const n = 1;
const m = -2;

suite
.add('n = 1: (n > -1)', function() {
  if (n > -1) {
  }
})
.add('n = 1: (n === n >>> 0)', function() {
  if ( n === n >>> 0) {
  }
})

.add('m = -2: (m > -1)', function() {
  if (m > -1) {
  }
})
.add('m = -2: (m === m >>> 0)', function() {
  if ( m === m >>> 0) {
  }
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
