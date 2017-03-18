/*
	
	Object는 첫 문자를 대문자 표시(파스칼 표기법)

*/

Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;	
	};
};

Number.method('integer', function() {
	return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
})

Array.dim = function (dimension, initial) {
	var a = [], i;
	for (var i = 0; i < dimension; i++) {
		a[i] = initial;
	}
	return a;
}
// 10개의 0을 갖는 배열 생성
// var myArray = Array.dim(10, 0);

Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (var i = 0; i < i < m; i++) {
		a = [];
		for (var j = 0; j < n ; j++) {
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
}
// 0으로 채워진 4*4 행령 생성
// var myMatrix = Array.matrix(4, 4, 0);

// 행과 열이 같은 수의 행렬을 만드는 메소드
Array.identity = function(n) {
	var i, mat = Array.matrix(n, n, 0);
	for (var i = 0; i < n; i++) {
		mat[i][i] = 1;
	}
	return mat;
}
// myMatrix = Array.identity(4);

// 정규표현식을 사용하는 메소드
// regexp.exec, regexp.test, string.match, string.replace, string.search, string.split

function assert(value, desc) {
	var div = document.createElement('div');
	// div.className = value ? 'pass' : 'fail';
	div.style.color = value ? 'green' : 'red';
	div.style.fontWeight = value ? 'bold' : '';
	div.style.textDecoration = value ? '' : 'line-through';
	div.appendChild(document.createTextNode(desc));
	document.body.appendChild(div);
}

function log() {
	try {
		console.log.apply(console, arguments);
	}
	catch(e) {
		try {
			opera.postError.apply(opera, arguments);
		}
		catch(e) {
			alert(Array.prototype.join.call(arguments, " "));
		}
	}
}