// вариант импорта класса модуля первый
// обязательное условие
// добавление в package.json type = module
/*
import FuncOne from './folder_one/function-one.js';

const arr = [1, 2, 3];
const F = new FuncOne;
F.arrSum(arr).then(res => console.log((res)));
*/

// вариант импорта класса модуля второй
const FuncOne = require('./folder_one/function-one.js');

const arr = [3, 1, 2];
FuncOne.arrSum(arr).then(res => console.log((res)));
console.log(FuncOne.arrSort(arr));
