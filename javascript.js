let count=0;
function increase(){
    count++;
    document.getElementById("data").innerHTML=count;
}
function decrease(){
    if(count>1){
        count--;
        document.getElementById("data").innerHTML=count;
    }
    else{
        document.getElementById("data").innerHTML="ADD";
    } 
}