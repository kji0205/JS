var _ = require('../lib/underscore-min');

function lyricSegment(n){
    return _.chain([])
        .push(n + " bottles of beer on the wall")
        .push(n + " bottles of beer")
        .push("Take one down, pass it around")
        .tap(function(lyrics){
            if (n > 1) {
                lyrics.push((n-1) + " bottles of beer on the wall.");
            } else {
                lyrics.push("No more bottles of beer on the wall!");
            }
        })
        .value();
}
var a=lyricSegment(9);
console.log(a);

function song(start, end, lyricGen){
    return _.reduce(_.range(start, end,-1),
        function(acc, n){
            return acc.concat(lyricGen(n));
        }, []);
}
var b=song(99, 0, lyricSegment);
// console.log(b);
