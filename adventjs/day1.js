function findFirstRepeated(gifts) {
    let matchIndex = null, foundIndex = null;
    let j=null; 
    let notFound = -1;
    gifts.forEach( (gift, i) => {
      j= i+1;
      foundIndex = gifts.indexOf(gift, i+1);
      if (foundIndex != notFound && (foundIndex < matchIndex || matchIndex === null)) {
          matchIndex = foundIndex;
      } 
    });
    if (matchIndex) {
      return gifts[matchIndex];
    }
    else return -1;
  
  }

  const giftIds = [2, 1, 3, 5, 3, 2];
  const firstRepeatedId = findFirstRepeated(giftIds);
  console.log(giftIds);
  console.log(firstRepeatedId);
  
  const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) 
const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) 
  