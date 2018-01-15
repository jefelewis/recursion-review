// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj);
  // Undefined
  if( typeof obj === 'undefined'){
    return 'undefined';
  }

  // Number
  if (typeof obj === 'number') {
    return obj.toString();
  }

  // Boolean
  if(typeof obj === 'boolean'){
    return String(obj);
  }

  // String
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }

  // Array
  if (Array.isArray(obj)) {
    if (!(obj.length)){
      return '[]';
    } else{
      obj = obj.map(function (elem) {
        return stringifyJSON(elem);
      });
      return '[' + obj + ']';
    }
  }

  // Object
  if (typeof obj === 'object'){
    // Null
    if (obj === null){
      return 'null';
    }
    // Empty Object
    if (Object.keys(obj).length === 0){
      return '{}';
    }
    // Object
    var arr = [];
    for (var keys in obj) {
      if(typeof obj[keys] === 'function' || typeof obj[keys] === 'undefined'){
        continue;
      }
      var key = stringifyJSON(keys);
      var val = stringifyJSON(obj[keys]);
      var prop = key + ':' + val;
      arr.push(prop);
    }
    return '{' + arr.join(',') + '}';
  }

};
