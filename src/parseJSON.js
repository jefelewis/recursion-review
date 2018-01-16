// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log(json);

  // function removeQuotes(str){
  //   return str.replace(/\"/g, "")
  // }

  

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

    // String
    if (typeof value === 'string') {
      if (value.length === 2) {
        return '';
      } else {
        return value;
      }
    }

    // Number
    if (typeof Number(json) === 'number' && Number(json) !== NaN) {
      return Number(json);
    }

    // Undefined/Null
    if(json === 'undefined'){
      return undefined;
    }
    
    
  };



  // RECURSIVE CASES
  
  if (startIndex === '[' && endIndex === ']') {
    // Array stuff
    if (json.length === 2) {
      return [];
    } else {
      // Array with contents
      var content = json.slice(1, - 1).split(", ");
      // console.log('***' + content);
      return content.map(function (elem) {
        return helper(elem);
      });
      // console.log('CONTENT ' + Array.isArray(content));
    }

    
    


  }

  // Object
  if (startIndex === '{' && endIndex === '}') {
    // Empty Object
    if(json.length === 2){
      return {};
    } else {
      // Object with contents
      var obj = {};
      var content = json.slice(1, json.length - 1);
      content.split(',').forEach(function (prop) {
        var propArr = prop.split(': ');
        obj[propArr[0]] = helper(propArr[1]);
      });
      return obj;
    }
    
    
  }


};
