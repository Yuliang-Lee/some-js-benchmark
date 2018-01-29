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
```bash
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
```bash
node version: v8.9.0, date: Sun Dec 03 2017 13:20:00 GMT+0800 (CST)
Starting...
4 tests completed.

n = 1: (n > -1)         x 555,454,137 ops/sec ±1.01% (86 runs sampled)
n = 1: (n === n >>> 0)  x 557,349,530 ops/sec ±0.94% (88 runs sampled)
m = -2: (m > -1)        x 548,955,198 ops/sec ±1.12% (84 runs sampled)
m = -2: (m === m >>> 0) x 561,871,240 ops/sec ±0.96% (84 runs sampled)
```

# deep_clone

better:
```js
lodash.cloneDeep();
```

result:
```bash
node version: v8.9.0, date: Mon Jan 29 2018 10:47:31 GMT+0800 (CST)
Starting...
2 tests completed.

lodash.cloneDeep            x 20,112 ops/sec ±1.28% (80 runs sampled)
JSON.parse + JSON.stringify x 10,371 ops/sec ±1.10% (86 runs sampled)
```