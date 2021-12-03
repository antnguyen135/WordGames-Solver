var displayFunction = (function() {
    var executed = false;
    return function() {
        if (!executed) {

            executed = true;
            
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
    };
})
();

var displayCrossWord = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var cat = document.createElement("div");
            cat.style.width = "100";
            cat.style.height = "100";
            cat.style.background = "lightblue";
            cat.id = "crossWordPuzzle";
            var r = parseInt(document.getElementById("row").value);
            var c = parseInt(document.getElementById("col").value);
            var crossW = document.getElementById("wordSearchPuzz").value;
            var crossWordIter = 0;
            cat.innerHTML = "Here is the cross word: ";

            while(crossWordIter < r*c){
                if(crossWordIter % c == 0){
                    cat.innerHTML += "<br>" + crossW[crossWordIter]+" ";
                    crossWordIter++;
                }
                else{
                    cat.innerHTML += crossW[crossWordIter]+ " ";
                    crossWordIter++;
                }
            }
            document.getElementById("main").appendChild(cat);
        }
    };
})
();

var displayResult = (function() {
    var executed = false;
    return function() {
        if (!executed) {

            executed = true;
            
            var result = document.createElement("div");
            result.style.width = "100";
            result.style.height = "100";
            result.id = "wordSearch";
            result.innerHTML = '<h2 style ="color:blue"> Results </h2>';       
            document.getElementById("main").appendChild(result);
        }
    };
})
();