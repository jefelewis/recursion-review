// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // var parentNode = document.body;
  var arr = [];
  var nodeList = node || document.body;

  var part = nodeList.className.split(" ");

  if(part.indexOf(className) >= 0){
    arr.push(nodeList);
  }

  // nodeList.forEach(function(node) {
  //   if (node.classList === '') {
  //     getElementsByClassName(className, node)
  //   //   arr.push(node);
  //     console.log(node.classList);
  //   }
  // });
  // console.log(arr);

 
  for (var i = 0; i < nodeList.children.length; i++){
    var output = getElementsByClassName(className, nodeList);
    arr = arr.concat(output);
  }

  return arr;
};
