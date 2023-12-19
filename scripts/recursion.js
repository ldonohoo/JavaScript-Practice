function multiply(arr, n) {
    let what = 0, index = 0;
    if (n <= 0) {
      return 1;
    } else {
      index = n-1;  
      what = arr[n-1];
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }


  let arr = [1, 3, 4, 2];

  console.log(multiply(arr, 4));

