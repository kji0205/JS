const util = require('util');

function elementType(data, left, right) {
  this.left= null;
  this.right= null;
  this.data= data;
};

var Tree = function(){
  this.root = null;
  this.depth = 0;
}
Tree.prototype = {
  insert: function(data, left, right){
    var n = new elementType(data);
    if (this.root == null) {
      this.root = n;
    } else {
      var current = this.root;
      var parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
              parent.left = n;
              break;
          }
        }
        else {
          current = current.right;
          if (current == null) {
              parent.right = n;
              break;
          }
        }
      }
    }
  },
  getNode: function ( _children, _id, _result ) {
    /* 전체 리스트를 탐색 */
    for ( var i=0, child; child = _children[i]; i++ ) {
      /* 노드를 찾았으면, */
      if ( child.id === _id ) {
        /* 결과값 리턴 */
        return child;
      }
      /* 찾는 노드가 아니면, */
      else {
        /* 자식 노드들를 탐색 */
        _result = arguments.callee( child.children, _id ) || _result;
      }
    }
    return _result;
  }
};

var tree = new Tree();
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(2);

// console.dir(tree);
// console.log(util.inspect(tree));
// console.log(util.inspect(tree, false, null))
console.log(JSON.stringify(tree, null, 4));
