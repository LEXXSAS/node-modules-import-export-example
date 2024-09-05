// вариант экспорта модуля класса первый
// обязательное условие
// добавление в package.json type = module
/*
export default class FuncOne {
  async sum(arr)  {
    if (!arr) {
      return 'array is empty'
    }
    const sum = arr.reduce((acc, item) => {
      return acc + item;
    }, 0)
    return sum
  }
}
*/

// вариант экспорта модуля класса второй

class FuncOne {
  async arrSum(arr)  {
    if (!arr) {
      return 'array is empty'
    }
    const sum = arr.reduce((acc, item) => {
      return acc + item;
    }, 0)
    return sum
  }

  arrSort(arr) {
    return arr.sort((a, b) => a - b)
  }
}

module.exports = new FuncOne();
