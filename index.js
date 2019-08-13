var obj = { num : 10};

var addTothis = function b(a) {
  return this.num + a
};

var b = addTothis.call(obj, 5);

console.log("b is "+ b);

var c = addTothis.apply(obj, [5]);

console.log("c is "+ c);

var d = addTothis.bind(obj);

d(20);

console.log(d(20));
