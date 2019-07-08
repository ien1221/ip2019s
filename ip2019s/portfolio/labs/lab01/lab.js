function start(e) {
    var name = [
        {
            char: '黃',
            cns:'1-6327',
            unicode:'9EC3',
            big5:'B6C0'
        },
        {
            char: '士',
            cns:'1-4449',
            unicode:'58EB',
            big5:'A468'
        },
        {
            char: '儼',
            cns:'1-7B57',
            unicode:'513C',
            big5:'C56B'
        },
    ];
  

    var x = document.getElementById('div1');

    for (var i = 0; i < 3; i++) {
        x.innerHTML += name[i].char;
        x.innerHTML += '  cns =';
        x.innerHTML += name[i].cns;
        x.innerHTML += '  unicode =';
        x.innerHTML += name[i].unicode;
        x.innerHTML += '  big5 =';
        x.innerHTML += name[i].big5;
        x.innerHTML += '<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
