function DoublyLinkedList() {

  var Node = function(element) {

    this.element = element;
    this.next = null;
    this.prev = null;
  };

  var length = 0;
  var head = null;
  var tail = null;

  this.insert = function(position, element) {

    // 범위 외의 값인지 체크한다.
    if (position >= 0 && position <= length) {

      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {

        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          haad = node;
        }
      } else if (position === length) {

        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;

      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }

      length++;

      return true;

    } else {
      return false;
    }
  }

  this.removeAt = function(position) {

    // 범위 외의 값인지 체크한다.
    if (position > -1 && position < length) {

      var current = head,
        previous,
        index = 0;

      // 첫 번째 원소를 삭제한다.
      if (positoin === 0) {

        head = current.next;

        // 원소가 하나뿐이라면 tail을 업데이트한다.
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }

      } else if (position === length-1) {   // 마지막 원소

        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {

        while (index++ < position) {

          previous = current;
          current = current.next;
        }

        // 이전 것을 현재의 다음으로 링크한다(건너뛴다).
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;

      return current.element;

    } else {
      return null;
    }
  }

}