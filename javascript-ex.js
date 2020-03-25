//KlaudiaC 18mars

function authorDialog(){
    alert("KlaudiaC 2020");
}


function textFunction() { 
  document.getElementById("uppgift3").innerHTML = "KlaudiaC";
  document.getElementById("uppgift3").style.backgroundColor = "lightblue";  
}

function toggleImage() {
    var img1 = "http://placehold.it/350x150";
    var img2 = "http://placehold.it/200x200";
    
    var imgElement = document.getElementById('toggleImage');
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;
 }

//KlaudiaC 23mars

function minFunktion(){
    var x, text;

    x = document.getElementById("input").value;

    text = "Hej" + x + "!";

    document.getElementById("demo").innerHTML = text 

}