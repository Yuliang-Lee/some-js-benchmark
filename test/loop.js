const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');


const suite = new Benchmark.Suite('s1');
// const n = new Array(100000).fill('n');
const n = []
for (let i = 0; i < 100000; i++) {
  n.push(`${Math.random()}n`)

}


suite
.add('for index & push', function() {
  let a = []
  for (let i = 0; i < n.length; i++) {
    a.push(`${n[i]}`);
  }
})
.add('for index & assignment', function() {
  let a = []
  for (let i = 0; i < n.length; i++) {
    a[i] = `${n[i]}`;
  }
})
.add('for of', function() {
  let a = []
  for (const item of n) {
    a.push(`${item}`)
  }
})
.add('forEach', function() {
  let a = []
  n.forEach(item => {
    a.push(`${item}`)
  })
})
.add('map', function() {
  let a = []
  a = n.map(item => `${item}`)
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
