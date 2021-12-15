const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('s1');
// const n = new Array(100000).fill('n');
const n = []
for (let i = 0; i < 100000; i++) {
  n.push(`${Math.random()}n`)

}


suite
.add('concat', function() {
  let a = ''
  for (let i = 0; i < n.length; i++) {
    a += `${n[i]},`;
  }
  // let b = a.slice(0, -1)
})
.add('array join', function() {
  let a = []
  for (let i = 0; i < n.length; i++) {
    a.push(n[i]);
  }
  a.join(',')
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
