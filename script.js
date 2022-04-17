const API="https://Chat2022L.lailazudne.repl.co"
let zina = document.querySelector('.manaZina');
let vards = document.querySelector('.vards');
let zinas = document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;

    fetch(API + '/sutit/'+ vards.value +'/' + zina.value)
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

setInterval( ieladetChataZinas, 1000 )