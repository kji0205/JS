/*
Queue
- FIFO(First In First Out)
*/

module.exports = function Queue() {

    var items = [];

    // enque
    this.enqueue = function(element) {
        items.push(element);
    };

    // dequeue
    this.dequeue = function() {
        return items.shift();
    };

    // front
    this.front = function() {
        return items[0];
    };

    // isEmpty
    this.isEmpty = function() {
        return items.length === 0;
    };

    this.clear = function() {
        items = [];
    }

    // size
    this.size = function() {
        return items.length;
    };

    this.print = function() {
        console.log(items.toString());
    };
}

console.time('Queue');
var Queue = require('./Queue');

var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
queue.print();
console.log(queue.size());
queue.dequeue();
queue.print();

console.timeEnd('Queue');
