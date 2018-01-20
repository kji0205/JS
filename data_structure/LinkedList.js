/*
LinkedList
*/

function LinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    // 리스트 맨 끝에 원소를 추가한다.
    this.append = function(element){

        var node = new Node(element),
            current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            // 마지막 원소를 발견할 때까지 계속 루프를 순환한다.
            while(current.next) {
                current = current.next;
            }

            // 마지막 원소를 링크할 수 있게 다음 노드에 할당한다.
            current.next = node;
        }

        length++;       // 리스트의 크기를 업데이트한다.
    };

    this.insert = function(position, element){

        // 범위 외의 값인지 체크
        if (position >= 0 && position <= length) {

            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {

                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;    
        }
    };

    this.removeAt = function(position) {
        // 범위 외의 값인지 확인
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            // 첫 번째 원소 삭제
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // 현재의 다음과 이전 것을 연결한다. 삭제하기 위해 건너뛴다.
                previous.next = current.next;
            }

            length--;

            return current.element;

        } else {
            return null;
        }
    };
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function(element){

        var current = head,
            index = -1;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };
    this.isEmpty = function(){};
    this.size = function(){};
    this.toString = function(){
        var current = head,
            string = '';

        while (current) {
            string += current.element;
            current = current.next;
        }
        return string;
    };
    this.print = function(){
        console.log(head);
    };
}

console.time();
var list = new LinkedList();
list.append(15);
list.append(10);
// list.removeAt(0);
list.print();
console.timeEnd();
