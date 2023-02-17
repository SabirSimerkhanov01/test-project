// @ts-nocheck

import _ from 'lodash';

import getFunction from '../src/index';

const set = getFunction();

// BEGIN (write your solution here)

let object;

beforeAll(() => {
  object = { a: [{ b: { c: 3 } }] };
});

const news = {};

test('set compare', () => {
  const copy = _.cloneDeep(object);
  set(object, 'a[0].b.c', 4);
  expect(object.a[0].b.c).toBe(4);
  copy.a[0].b.c = 4;
  expect(object).toEqual(copy);
});

test('set empty object', () => {
  set(news, 'a[0].b.c', 1);
  expect(news.a[0].b.c).toBe(1);
});

// END
