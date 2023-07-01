var answer;

function plus(){
    var so1 = parseInt(document.getElementById("so1").value)
    var so2 = parseInt(document.getElementById("so2").value)
    answer = so1 + so2;
    document.getElementById("answer").value = answer;
}

function minus(){
    var so1 = parseInt(document.getElementById("so1").value)
    var so2 = parseInt(document.getElementById("so2").value)
    answer = so1 - so2;
    document.getElementById("answer").value = answer;
}

function times(){
    var so1 = parseInt(document.getElementById("so1").value)
    var so2 = parseInt(document.getElementById("so2").value)
    answer = so1 * so2;
    document.getElementById("answer").value = answer;
}

function devide(){
    var so1 = parseInt(document.getElementById("so1").value)
    var so2 = parseInt(document.getElementById("so2").value)
    answer = so1 / so2;
    document.getElementById("answer").value = answer;
}

function power(){
    var so1 = parseInt(document.getElementById("so1").value)
    var so2 = parseInt(document.getElementById("so2").value)
    answer = Math.pow(so1, so2);
    document.getElementById("answer").value = answer;
}

