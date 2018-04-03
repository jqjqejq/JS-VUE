// f1称之为闭包函数
function f1(){
  var n=999;

  function f2(){
    alert(n); 
  }
  
  return f2;
}

var result=f1();

result(); // 999

/** 闭包就是能够读取其他函数内部变量的函数 **/
