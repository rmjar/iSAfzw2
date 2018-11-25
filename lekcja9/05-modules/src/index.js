import * as arrHelpers from './helpers';

const a = [1, 2, 5];
console.log (arrHelpers.square(a));
console.log(arrHelpers.sumArray(a));
console.log(arrHelpers.countElements(a));

import {bark} from './animals';
console.log(bark());

import {i, inc} from './counter';
console.log(i);
inc();
console.log(i);