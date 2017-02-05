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
  console.log('INDEX:', index);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, val);
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode= currentNode.next;
    }
    currentNode.next = new HashNode(key, val);
  }
}

var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'meg@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');


console.log(myHT.buckets);

// console.log(myHT.hash('Kirk'));

// console.log('hello world'.charCodeAt(4));
// ;
