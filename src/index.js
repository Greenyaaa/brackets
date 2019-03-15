module.exports = function check(str, bracketsConfig) {
  // your solution
  var strArr=str.split('');
    var bc=bracketsConfig;
    for(var i=0;i<strArr.length;i++){
      
      for(var n=0;n<bc.length;n++){
        if(strArr[i]===bc[n][0] && strArr[i+1]===bc[n][1]){
          strArr.splice(i,2);
          if (strArr.length==0){

              return true;
          }
          i=-1;
        }
      }
    }
    return false;
}
