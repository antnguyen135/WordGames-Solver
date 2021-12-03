var displayFunction = (function() {
    var executed = false;
    return function() {
        var parentDiv = document.getElementById("main")
        if (parentDiv.children.length<3){  
            var executed = true;
            var div = document.createElement("div");
            div.style.width = "100";
            div.style.height = "100";
            div.style.background = "lightblue";
            div.id = "row&col";
            if(document.getElementById("row").value == ""){
                div.innerHTML += "row: 0<br>";
            }
            else{
                div.innerHTML += "row: " + document.getElementById("row").value + "<br>";
            }
            if(document.getElementById("col").value == ""){
                div.innerHTML += "col: 0";
            }
            else{
                div.innerHTML += "col: " + document.getElementById("col").value;
            }            
            document.getElementById("main").appendChild(div);
        }
        else{
            let d = document.getElementById("main");
            while(d.firstChild){
                    d.removeChild(d.firstChild);
        }
            displayFunction();
            }
    };
})
();

var displayCrossWord = (function() {
    var executed = false;
    return function() {
        var parentDiv = document.getElementById("main")
        var rawCrossW = document.getElementById("wordSearchPuzz").value;
        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var crossW ="";
        for(var x = 0; x < rawCrossW.length; x++){
            if(alphabet.includes(rawCrossW[x])){
                crossW += rawCrossW[x];
            }
        }
        var r = parseInt(document.getElementById("row").value);
        var c = parseInt(document.getElementById("col").value);
        var cat = document.createElement("div");
        cat.style.width = "100";
        cat.style.height = "100";
        cat.style.background = "lightblue";
        cat.id = "crossWordPuzzle";
        if(crossW.length == r*c){
        if (parentDiv.children.length<3 && parentDiv.children.length ==0){  
            var crossWordIter = 0;
            cat.innerHTML = "<br>Here is the crossword: ";
            while(crossWordIter < r*c)
                if(crossWordIter % c == 0){
                    cat.innerHTML += "<br>" + crossW[crossWordIter]+" ";
                    crossWordIter++;
                }
                else{
                    cat.innerHTML += crossW[crossWordIter]+ " ";
                    crossWordIter++;
                }
            displayResult();
            displayFunction();
            document.getElementById("main").appendChild(cat);   
        }
        else{
            let d = document.getElementById("main");
            while(d.firstChild){
                d.removeChild(d.firstChild);
        }
            displayCrossWord(); 
            }
        }
        else{
            let d = document.getElementById("main");
            while(d.firstChild){
                d.removeChild(d.firstChild);
            }
            cat.style.background = "#FAEBD7"
            cat.innerHTML = '<h2 style = "color:#FF6666"> Please make sure the entered word search fits the dimensions entered and is all letters</h2>';
            document.getElementById("main").appendChild(cat);    
        }
    };
})
();

var displayResult = (function() {
    var executed = false;
    return function(){
        var parentDiv = document.getElementById("main")
        if (parentDiv.children.length<3) {           
            var result = document.createElement("div");
            result.style.width = "100";
            result.style.height = "100";
            result.id = "wordSearch";
            result.innerHTML = '<h2 style ="color:blue"> <b>Results</b> </h2>';       
            document.getElementById("main").appendChild(result);
        }
        else{
        let d = document.getElementById("main");
        while(d.firstChild){
            d.removeChild(d.firstChild);
        }
        displayResult();
        }
    };
})
();

var clearDisplay = (function(){
    return function(){
        let d = document.getElementById("main");
        while(d.firstChild){
            d.removeChild(d.firstChild);
        }
        document.getElementById("row").value = "";
        document.getElementById("col").value = "";
        document.getElementById("wordSearchPuzz").value = "";
    }
})();

class toStore{
    constructor(w,d,r,c){
        this.word = w;
        this.direction = d;
        this.row = r;
        this.col = c;
    }
    toString(){
        let toReturn = "";
        toReturn += this.direction + "(" + this.row + "," + this.col + "):" + this.word;
        return toReturn;
    }
}
const data = require('./words.json');
var Dictionary = JSON.parse(JSON.stringify(data));
function findLargestWord(dictionary){
    var min = 0;
for(var z = 0; z < Dictionary["words"].length; z++){
    if(Dictionary.words[z].length > min){
        min = Dictionary.words[z].length; 
    }
}
return min;
}

function getWordInPuzzle(indexRow , indexCol, dir, len, numRows, numCols){

}
