# array distinct

results:
```js
node version: v8.17.0, date: Mon Mar 15 2021 16:42:38 GMT+0800 (CST)
  Starting...
  22 tests completed.

  simpleArr: setFun              x 2,344 ops/sec ±0.52% (96 runs sampled)
  simpleArr: forLoopIndexFun     x 53.52 ops/sec ±0.28% (69 runs sampled)
  simpleArr: forLoopObjectFun    x 9,595 ops/sec ±0.28% (95 runs sampled)
  simpleArr: forOfLoopObjectFun  x 9,330 ops/sec ±0.39% (94 runs sampled)
  simpleArr: foreachSetFun       x 3,332 ops/sec ±0.11% (98 runs sampled)
  simpleArr: foreachIndexOfFun   x 52.95 ops/sec ±0.14% (69 runs sampled)
  simpleArr: foreachObjectFun    x 5,720 ops/sec ±0.33% (99 runs sampled)
  simpleArr: filterIndexOfFun    x 27.09 ops/sec ±0.63% (49 runs sampled)
  simpleArr: filterObjectFun     x 5,687 ops/sec ±0.55% (96 runs sampled)
  simpleArr: reduceIndexFun      x 52.26 ops/sec ±0.44% (68 runs sampled)
  simpleArr: reduceObjectFun     x 5,675 ops/sec ±0.26% (97 runs sampled)
  complexArr: setFun             x 1,114 ops/sec ±0.52% (95 runs sampled)
  complexArr: forLoopIndexFun    x  8.45 ops/sec ±0.48% (25 runs sampled)
  complexArr: forLoopObjectFun   x 2,403 ops/sec ±0.39% (96 runs sampled)
  complexArr: forOfLoopObjectFun x 2,337 ops/sec ±0.18% (98 runs sampled)
  complexArr: foreachSetFun      x 1,882 ops/sec ±0.69% (96 runs sampled)
  complexArr: foreachIndexOfFun  x  8.45 ops/sec ±0.51% (25 runs sampled)
  complexArr: foreachObjectFun   x 2,020 ops/sec ±0.25% (97 runs sampled)
  complexArr: filterIndexOfFun   x  6.61 ops/sec ±0.18% (21 runs sampled)
  complexArr: filterObjectFun    x 1,876 ops/sec ±1.29% (96 runs sampled)
  complexArr: reduceIndexFun     x  8.40 ops/sec ±0.55% (25 runs sampled)
  complexArr: reduceObjectFun    x 2,000 ops/sec ±0.68% (98 runs sampled)
```

```js
  node version: v14.15.2, date: Mon Mar 15 2021 16:35:23 GMT+0800 (中国标准时间)
  Starting...
  22 tests completed.

  simpleArr: setFun              x  4,606 ops/sec ±0.25% (95 runs sampled)
  simpleArr: forLoopIndexFun     x  55.95 ops/sec ±0.70% (72 runs sampled)
  simpleArr: forLoopObjectFun    x 12,609 ops/sec ±1.13% (91 runs sampled)
  simpleArr: forOfLoopObjectFun  x 10,288 ops/sec ±0.43% (91 runs sampled)
  simpleArr: foreachSetFun       x  3,304 ops/sec ±3.73% (96 runs sampled)
  simpleArr: foreachIndexOfFun   x  55.34 ops/sec ±0.32% (71 runs sampled)
  simpleArr: foreachObjectFun    x  8,043 ops/sec ±8.11% (92 runs sampled)
  simpleArr: filterIndexOfFun    x  27.88 ops/sec ±0.70% (50 runs sampled)
  simpleArr: filterObjectFun     x  7,788 ops/sec ±5.85% (93 runs sampled)
  simpleArr: reduceIndexFun      x  55.02 ops/sec ±0.62% (71 runs sampled)
  simpleArr: reduceObjectFun     x  7,945 ops/sec ±8.00% (94 runs sampled)
  complexArr: setFun             x  2,415 ops/sec ±0.65% (96 runs sampled)
  complexArr: forLoopIndexFun    x   9.00 ops/sec ±0.30% (27 runs sampled)
  complexArr: forLoopObjectFun   x  1,920 ops/sec ±0.46% (97 runs sampled)
  complexArr: forOfLoopObjectFun x  1,884 ops/sec ±0.49% (98 runs sampled)
  complexArr: foreachSetFun      x  1,826 ops/sec ±0.84% (94 runs sampled)
  complexArr: foreachIndexOfFun  x   8.67 ops/sec ±2.97% (26 runs sampled)
  complexArr: foreachObjectFun   x  1,321 ops/sec ±0.75% (97 runs sampled)
  complexArr: filterIndexOfFun   x   6.86 ops/sec ±0.51% (22 runs sampled)
  complexArr: filterObjectFun    x  1,604 ops/sec ±0.18% (97 runs sampled)
  complexArr: reduceIndexFun     x   9.01 ops/sec ±0.25% (27 runs sampled)
  complexArr: reduceObjectFun    x  1,339 ops/sec ±0.36% (96 runs sampled)
```

# number not negative

better: 
```js
if (num === num >>> 0) {

}
```

result:
```js
node version: v8.9.0, date: Sun Dec 03 2017 13:20:00 GMT+0800 (CST)
Starting...
4 tests completed.

n = 1: (n > -1)         x 555,454,137 ops/sec ±1.01% (86 runs sampled)
n = 1: (n === n >>> 0)  x 557,349,530 ops/sec ±0.94% (88 runs sampled)
m = -2: (m > -1)        x 548,955,198 ops/sec ±1.12% (84 runs sampled)
m = -2: (m === m >>> 0) x 561,871,240 ops/sec ±0.96% (84 runs sampled)
```

# deep_clone

There are any other methods of deep clone in browser environment，benchmark see [xlaoyu deep clone](https://jsperf.com/xlaoyu-deep-clone/1)

referrer:
1. https://dassur.ma/things/deep-copy/
2. [Structured Clone](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)

better:
```js
lodash.cloneDeep();
```

result:
```js
node version: v8.9.0, date: Mon Jan 29 2018 10:47:31 GMT+0800 (CST)
Starting...
2 tests completed.

lodash.cloneDeep            x 20,112 ops/sec ±1.28% (80 runs sampled)
JSON.parse + JSON.stringify x 10,371 ops/sec ±1.10% (86 runs sampled)
```


# get current millisecond

better:
```js
Date.now();
```

result:
```js
  node version: v8.9.0, date: Thu Mar 29 2018 23:32:45 GMT+0800 (CST)
  Starting...
  4 tests completed.

  Date.now()           x 12,049,196 ops/sec ±1.63% (84 runs sampled)
  +new Date()          x  4,912,392 ops/sec ±1.29% (92 runs sampled)
  new Date().getTime() x  6,854,320 ops/sec ±1.31% (89 runs sampled)
  new Date().valueOf() x  7,242,938 ops/sec ±1.23% (90 runs sampled)
```


# number to string

better:
```js
var num = 1;
var string = `${num}`;
```

result:
```js
  node version: v8.9.0, date: Thu Mar 29 2018 23:35:32 GMT+0800 (CST)
  Starting...
  3 tests completed.

  concat                x 187,476,577 ops/sec ±1.93% (82 runs sampled)
  es6 template literals x 204,141,791 ops/sec ±2.11% (85 runs sampled)
  String constructor    x  96,943,813 ops/sec ±2.06% (81 runs sampled)
```

# array functions

results:
```js
  node version: v14.15.2, date: Mon Mar 15 2021 17:05:59 GMT+0800 (中国标准时间)
  Starting...
  7 tests completed.

  10000 push       x 45,176 ops/sec ±1.88% (87 runs sampled)
  []操作             x 43,958 ops/sec ±1.40% (86 runs sampled)
  splice add       x 36,650 ops/sec ±1.02% (88 runs sampled)
  unshift          x 44,129 ops/sec ±0.66% (90 runs sampled)
  splice add first x 32,692 ops/sec ±0.56% (90 runs sampled)
  forEach push     x  3,005 ops/sec ±5.52% (89 runs sampled)
  map              x 11,645 ops/sec ±11.87% (89 runs sampled)
```
