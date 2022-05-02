let multiple =[];
for(i=1;i<=20;i++){
    if(i%3==0){
        multiple += i + "<br>";
    }
}

document.getElementById('demo').innerHTML=multiple+"<br>";