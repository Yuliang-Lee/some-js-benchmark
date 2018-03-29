# array distinct

better:
```js
function foreachObjectFun(arr) {
  const newArr = [];
  const obj = {};
  arr.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
      newArr.push(item);
    }
  });

  return newArr;
}
```

result:
```js
node version: v8.9.0, date: Sun Dec 03 2017 12:46:50 GMT+0800 (CST)
Starting...
16 tests completed.

simpleArr: foreachIndexOfFun  x 51.21 ops/sec ±2.29% (66 runs sampled)
complexArr: foreachIndexOfFun x  8.18 ops/sec ±1.78% (25 runs sampled)
simpleArr: foreachObjectFun   x 6,303 ops/sec ±6.35% (87 runs sampled)
complexArr: foreachObjectFun  x 1,875 ops/sec ±1.25% (88 runs sampled)
simpleArr: foreachSetFun      x 2,523 ops/sec ±3.10% (84 runs sampled)
complexArr: foreachSetFun     x 1,582 ops/sec ±1.75% (86 runs sampled)
simpleArr: filterIndexOfFun   x 26.96 ops/sec ±1.41% (48 runs sampled)
complexArr: filterIndexOfFun  x  6.70 ops/sec ±1.92% (21 runs sampled)
simpleArr: filterObjectFun    x 4,558 ops/sec ±1.17% (92 runs sampled)
complexArr: filterObjectFun   x 1,498 ops/sec ±1.51% (90 runs sampled)
simpleArr: reduceFun          x 52.12 ops/sec ±1.46% (67 runs sampled)
complexArr: reduceFun         x  8.30 ops/sec ±1.61% (25 runs sampled)
simpleArr: reduceObjectFun    x 4,540 ops/sec ±1.42% (86 runs sampled)
complexArr: reduceObjectFun   x 1,559 ops/sec ±1.30% (88 runs sampled)
simpleArr: setFun             x 1,588 ops/sec ±1.36% (89 runs sampled)
complexArr: setFun            x   770 ops/sec ±1.35% (86 runs sampled)
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