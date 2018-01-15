// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log(json);


  // Indexes
  var startIndex = json.slice(0,1);
  var endIndex = json.slice(json.length - 1);

  // BASE CASES
  var helper = function (value) {
    // Boolean
    if(value === "true"){
      return true;
    }
    if(value === "false"){
      return false;
    }

    // Number
    if (typeof Number(json) === 'number' && Number(json) !== NaN) {
      return Number(json);
    }

    // Undefined/Null
    if(json === 'undefined'){
      return undefined;
    }
    
    // String
    if (value.length === 1) {
      return '';
    }
  };



  // RECURSIVE CASES
  
  if (startIndex === '[' && endIndex === ']') {
    // Array stuff
    if (json.length === 2) {
      return [];
    }

    // Array with contents
    // var splittedArray = json.split(",");
    var convertedArray = json.slice(1,json.length);
    console.log(convertedArray);


  }

  // Object
  if (startIndex === '{' && endIndex === '}') {
    // Empty Object
    if(json.length === 2){
      return {};
    }
    
    // Object with contents
    var obj = {};
    var content = json.slice(1, json.length - 2);
    content.split(',').forEach(function (prop) {
      var propArr = prop.split(': ');
      obj[propArr[0]] = helper(propArr[1]);
    });
    // console.log(obj);
    return obj;
  }


};
