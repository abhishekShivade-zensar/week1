var greeting = "hello";
var namE = "world";
alert(greeting+" "+namE);

var greeting = greeting.replace(/hello/i,"he110");
var namE = namE.replace(/world/i,"w0r1d");
alert(greeting+" "+namE);

function reversestring(){
    const originalString = document.getElementById("string1").innerText;
    var outputstring="";
    for(i=originalString.length-1; i>=0;i--){
        outputstring += originalString[i];
    }

    document.getElementById("string2").innerHTML=outputstring;

}