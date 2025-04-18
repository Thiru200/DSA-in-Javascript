class Node{
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class UnorderedMap{
    constructor() {
        this.numElement = 0;
        this.capacity = 1;
        this.arr = new Array(this.capacity);
        this.arr[0] = null;
    }
    hashFunction(key) {
        let bucketIndex, sum = 0, factor = 31;
        for (let i = 0; i < key.length; i++){
            sum = ((sum % this.capacity) + ((key.charCodeAt(i)) * factor) % this.capacity) % this.capacity;
            factor = ((factor % 65535) * (31 % 65535)) % 65535;         
        }
        bucketIndex = sum;
        return bucketIndex;
    }
    getLoadFactor() {
        return (this.numElement + 1) / this.capacity;
    }
    rehashing() {
        let oldCapacity = this.capacity;
        let temp = this.arr;
        this.capacity = oldCapacity * 2;
        this.arr = new Array(this.capacity);
        for (let i = 0; i < this.capacity; i++){
            this.arr[i] = null;
        }
        for (let i = 0; i < oldCapacity; i++){
            let currBucketHead = temp[i];
            while (currBucketHead) {
                this.insert(currBucketHead.key, currBucketHead.value);
                currBucketHead = currBucketHead.next;
            }          
        }
    }
    insert(key, value) {
        while (this.getLoadFactor() > 0.5) {
            this.rehashing();
        }
        let bucketIndex = this.hashFunction(key);
        if (!this.arr[bucketIndex]) {
            let newNode = new Node(key, value);
            this.arr[bucketIndex] = newNode;
        }
        if (this.arr[bucketIndex]) {
                let newNode = new Node(key, value);
                newNode.next = this.arr[bucketIndex];
                this.arr[bucketIndex] = newNode;           
        }
    }
    search(key) {
        let bucketIndex = this.hashFunction(key);
        let bucketElement = this.arr[bucketIndex];
        while (bucketElement) {
            if (bucketElement.key == key) {
                return bucketElement;
            }
            return bucketElement.next;
        }
        console.log("Oops no data found");
        return -1;
    }
}

let myfun = new UnorderedMap();
myfun.insert("Thirumurugan.M",1);
myfun.insert("Karthi",2);
myfun.insert("Prabaa", 3);
myfun.insert("Manivasagan", 3);
myfun.insert("Amma", 3);
myfun.insert("Appa",5);
console.log(myfun,myfun.search("Appa"));