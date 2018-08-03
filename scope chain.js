function a(){
    var myVar = 2;
}
function b(){
    a();
    console.log(myVar); // 1
}
var myVar = 1;
b();

function c(){    

    function d(){
        var myVar = 2;    
        console.log(myVar); // 2    
    }
    d();
    console.log(myVar); // 1
}
c();