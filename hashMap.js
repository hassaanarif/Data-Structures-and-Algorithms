class HashMap {
  constructor(data) {
    this.data = data;
    this.map = {};
  }

  insert = () => {
    for (let i = 0; i < this.data.length; i++) {
      let character = this.data.substr(i, 1);
      //checking if character is present in hashtable
      if (this.map[character]) {
        //increasing the count by one
        this.map[character] = this.map[character] + 1;
      } else {
        this.map[character] = 1;
      }
    }
    console.log(this.map);
  };

  lookup = () => {
    for (let i = 0; i < this.data.length; i++) {
      let character = this.data.substr(i, 1);
      if (this.map[character] == 1) {
        console.log(character);
        return;
      }
    }
  };
}

let map = new HashMap("A Green Apple");
map.insert();
map.lookup();
