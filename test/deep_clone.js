/**
 * deep clone
 * lodash.cloneDeep vs JSON.parse(JSON.stringify()) 
 */


const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const _ = require('lodash');

const suite = new Benchmark.Suite('s1');
const obj = [
  {
      "id": "1231231231",
      "name": "人口属性",
      "desc": "",
      "pId": "",
      "type": 1,
      "showType": "list",
      "status": 2,
      "icon": "",
      "createTime": 1516009837000,
      "createBy": 111338179,
      "order": 0,
      "deleted": 0,
      "childs": [
          {
              "id": "asf1kl2j3lk12j3lk12jl3",
              "name": "常用所在地",
              "desc": "",
              "pId": "5a5c798bda4a6e1b146e7d09",
              "type": 1,
              "showType": "level",
              "status": 2,
              "icon": "",
              "createTime": 1516074774000,
              "createBy": 111338179,
              "order": 0,
              "deleted": 0,
              "childs": [],
              "tagIds": [
                  3,
                  4,
                  5,
                  6
              ]
          },
          {
              "id": "12l3kj12lk3j12k3j1",
              "name": "最近所在地",
              "desc": "",
              "pId": "5a5c798bda4a6e1b146e7d09",
              "type": 1,
              "showType": "level",
              "status": 2,
              "icon": "",
              "createTime": 1516074775000,
              "createBy": 111338179,
              "order": 1,
              "deleted": 0,
              "childs": [],
              "tagIds": [
                  7,
                  8,
                  9,
                  10
              ]
          }
      ],
      "tagIds": [
          1,
          12,
          13,
          23
      ]
  },
  {
      "id": "lk324jk32j4l32j432j4lk23jl4",
      "name": "设备属性",
      "desc": "",
      "pId": "",
      "type": 1,
      "showType": "list",
      "status": 1,
      "icon": "",
      "createTime": 1516790560000,
      "createBy": 111338179,
      "order": 1,
      "deleted": 0,
      "childs": [
          {
              "id": "5a5d76bdda4a6e76286f3729",
              "name": "设备品牌机型",
              "desc": "",
              "pId": "5a686320ced4b812c0e4fb7a",
              "type": 1,
              "showType": "level",
              "status": 1,
              "icon": "",
              "createTime": 1516074721000,
              "createBy": 111338179,
              "order": 0,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          }
      ],
      "tagIds": [
          11
      ]
  },
  {
      "id": "kl23j4lk32j4l23jl423j4l23k",
      "name": "兴趣偏好",
      "desc": "",
      "pId": "",
      "type": 1,
      "showType": "list",
      "status": 1,
      "icon": "",
      "createTime": 1516342935000,
      "createBy": 111338179,
      "order": 2,
      "deleted": 0,
      "childs": [
          {
              "id": "l1k2j3k12j3j12lk3j1l3",
              "name": "游戏用户感知标签",
              "desc": "",
              "pId": "5a618e64da4a6e3b71f5ce9c",
              "type": 1,
              "showType": "levelKeyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791767000,
              "createBy": 111338179,
              "order": 0,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          },
          {
              "id": "12klj3l12kjl31j2l3kj12lk31",
              "name": "网游玩法",
              "desc": "",
              "pId": "5a618e64da4a6e3b71f5ce9c",
              "type": 1,
              "showType": "keyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791799000,
              "createBy": 111338179,
              "order": 1,
              "deleted": 0,
              "childs": [],
              "tagIds": [
                  19
              ]
          },
          {
              "id": "1lk2j3l1j2l3kj12l31",
              "name": "单机玩法",
              "desc": "",
              "pId": "12uiy3i1u2yh3hg12h3h1j2",
              "type": 1,
              "showType": "levelKeyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791834000,
              "createBy": 111338179,
              "order": 2,
              "deleted": 0,
              "childs": [],
              "tagIds": [
                  16
              ]
          },
          {
              "id": "12lj3l12j3lkj12l3k123",
              "name": "应用偏好",
              "desc": "",
              "pId": "1jh2g3h12jh3bj1h2b3j12b3",
              "type": 1,
              "showType": "levelKeyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791867000,
              "createBy": 111338179,
              "order": 3,
              "deleted": 0,
              "childs": [],
              "tagIds": [
                  17
              ]
          },
          {
              "id": "1l23l1k2j3lk1j13i1uy31uy23",
              "name": "浏览偏好",
              "desc": "",
              "pId": "12kj312ljl3kj12lk3j1l",
              "type": 1,
              "showType": "keyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791918000,
              "createBy": 111338179,
              "order": 4,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          },
          {
              "id": "1h2iu31i23g1h2u31g2u3v1",
              "name": "视频偏好",
              "desc": "",
              "pId": "1kj2h3kj1h2k3jh1k1",
              "type": 1,
              "showType": "levelKeyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791933000,
              "createBy": 111338179,
              "order": 5,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          },
          {
              "id": "kl12j312j3l12jl3k12j3l1k23",
              "name": "媒体偏好",
              "desc": "",
              "pId": "5a618e64da4a6e3b71f5ce9c",
              "type": 1,
              "showType": "levelKeyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791967000,
              "createBy": 111338179,
              "order": 6,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          },
          {
              "id": "12iuy3iy123uyi123y1uy3",
              "name": "素材偏好",
              "desc": "",
              "pId": "5a618e64da4a6e3b71f5ce9c",
              "type": 1,
              "showType": "keyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516791985000,
              "createBy": 111338179,
              "order": 7,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          },
          {
              "id": "j123l1j2l3k1j23j1l2j31l",
              "name": "泛兴趣偏好",
              "desc": "",
              "pId": "5a618e64da4a6e3b71f5ce9c",
              "type": 1,
              "showType": "levelKeyValue",
              "status": 1,
              "icon": "",
              "createTime": 1516844277000,
              "createBy": 111338179,
              "order": 8,
              "deleted": 0,
              "childs": [],
              "tagIds": []
          }
      ],
      "tagIds": [
          22
      ]
  },
  {
      "id": "23kl1jlk12j3l12jl3j123l",
      "name": "行为偏好",
      "desc": "",
      "pId": "",
      "type": 1,
      "showType": "list",
      "status": 1,
      "icon": "",
      "createTime": 1516789639000,
      "createBy": 111338179,
      "order": 3,
      "deleted": 0,
      "childs": [],
      "tagIds": []
  },
  {
      "id": "3kl2jl12kj3l1k2j3lk1j2l3kj1l23",
      "name": "自定义标签",
      "desc": "",
      "pId": "",
      "type": 1,
      "showType": "list",
      "status": 1,
      "icon": "",
      "createTime": 1516789666000,
      "createBy": 111338179,
      "order": 4,
      "deleted": 0,
      "childs": [],
      "tagIds": []
  }
];

suite
.add('lodash.cloneDeep', function() {
  const a = _.cloneDeep(obj);
})
.add('JSON.parse + JSON.stringify', function() {
  const a = JSON.parse(JSON.stringify(obj));
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