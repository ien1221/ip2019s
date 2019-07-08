/*

*/
function update(){
    var x =document.getElementById('in1').value;
    var ele =document.getElementById('div2');
    var y =' ';
    for (var i = 0;i < x.length;i++) {
        y += x.charAt(i)
        y += ' U+';
        y += x.charCodeAt(i).toString(16).toUpperCase();
        y += '<br>';
    }
    ele.innerHTML = y;

    document.getElementById('div1').innerHTML =
    document.getElementById('in1').value.replace('我回來了','你回來了')
}

function start(e) {
    document.getElementById('in1').addEventListener("input",update);
    update();

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
