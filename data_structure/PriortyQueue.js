/*
PriortyQueue
*/

/*
우선순위 큐 
*/
require('console.table');

function PriortyQueue() {

    var items = [];

    function QueueElement (element, priority) {
        this.element = element;
        this.prioriry = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i=0; i<items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    }

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
        // console.log(items.toString());
        console.table(items);
    };
}

console.time();
var queue = new PriortyQueue();
console.log(queue.isEmpty());
queue.enqueue('John', 2);
queue.enqueue('Jack', 1);
queue.enqueue('Camila', 1);
queue.print();
console.log(queue.size());
queue.dequeue();
queue.print();
console.timeEnd();

/*
환형 큐
circular queue
*/

let Queue = require('./Queue');

function hotPotato (nameList, num) {

    var queue = new Queue();

    for (var i=0; i<nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1) {
        for (var i=0; i<num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '를 퇴장');
    }

    return queue.dequeue();
}

console.time();

var names = ['John','Jack','Camila','Ingrid','Cari'];
var winner = hotPotato(names, 7);
console.log('승자는 ' + winner + '입니다.');

console.timeEnd();
