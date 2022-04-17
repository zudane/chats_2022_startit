const API="https://Chat2022L.lailazudne.repl.co"
let zina = document.querySelector('.manaZina');
let vards = document.querySelector('.vards');
let zinas = document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;

    fetch(API + '/sutit/'+ vards.value +'/' + zina.value)
    let vards = document.getElementById('vards').value;
    if(vards!=""){
      if(zina.value!=""){
        zinas.innerHTML = zinas.innerHTML+"<br /><b>"+
                          vards+":</b> "+zina.value;
        zina.value="";
      }else{
        alert("Lūdzu, ieraksti kādu ziņu!");
      }
    }else{
      alert("Lūdzu, ievadi savu vārdu/nikname!");
    }
  
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}
async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.json();
    
    //console.log(await dati[0]['zina'])
    zinas.innerHTML= '';
    i=0;
    while (i < await dati.length)
    {
        console.log(i);
        zinas.innerHTML =zinas.innerHTML+dati[i]['vards']+': '+dati[i['zina']+ '<br />';
        i=i+1;
    }
    zinas.scrollTop = zinas.scrollHeight;
}//beidzas ieladetChataZinasJson

    
setInterval( ieladetChataZinasJson, 1000 )