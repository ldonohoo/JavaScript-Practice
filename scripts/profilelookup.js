// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let nameIndex = null, propFound = false;
    for (i=0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        nameIndex = i;
        if (contacts[i][prop] !== undefined) {
            propFound = true;
        }
      }
    }
      if (nameIndex === null) { return "No such contact";
      } else if (!propFound) {
         return "No such property";
      } else { 
        return contacts[nameIndex][prop];
      }
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "likes"));
  