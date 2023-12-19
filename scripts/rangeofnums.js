function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
    const arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
    }
  };

  console.log(rangeOfNumbers(1,5));
  console.log(rangeOfNumbers(6,9));
  console.log(rangeOfNumbers(4,4));


