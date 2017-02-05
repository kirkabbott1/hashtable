function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, val, next) {
  this.key = key;
  this.value = val;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key, val) {
  var index = this.hash(key);
  // console.log('INDEX:', index);
  if (!this.buckets[index]) {
     this.buckets[index] = new HashNode(key, val);
  }
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = val;
  }
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = val;
        return;
      }
      currentNode= currentNode.next;
    }
    currentNode.next = new HashNode(key, val);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    return null;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};

var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'meg@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanguy@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');


console.log(myHT.get('Dean'));
console.log(myHT.get('Megan'));
console.log(myHT.get('Dane'));


// console.log(myHT.buckets);

// console.log(myHT.hash('Kirk'));

// console.log('hello world'.charCodeAt(4));
// ;
