const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const suite = new Benchmark.Suite('s1');

const obj = {};

const _obj = {};
const proxy = new Proxy(_obj, {
  set: (obj, prop, value) => { _obj[prop] = value; }
});

const defineProp = {};
Object.defineProperty(defineProp, 'prop', {
  configurable: false,
  set: v => defineProp._v = v
});

suite.
  add('vanilla', function() {
    obj.prop = 5;
  }).
  add('proxy', function() {
    proxy.prop = 5;
  }).
  add('defineProperty', function() {
    defineProp.prop = 5;
  }).
  on('cycle', function(event) {
    benchmarks.add(event.target);
  })
  .on('start', function () {
    console.log('\n  node version: %s, date: %s\n  Starting...', process.version, Date());
  })
  .on('complete', function() {
    benchmarks.log();
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    process.exit(0);
  })
  .run({ 'async': true, 'queued': true });