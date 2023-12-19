const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    var failureItems = [];
    const {failure} = result;
    for (i=0; i < failure.length; i++) {
      failureItems[i] = `<li class="text-warning">${failure[i]}</li>`;
    }
  
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);
