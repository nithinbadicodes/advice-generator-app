const url ="https://api.adviceslip.com/advice";



const dice = document.getElementById('dice');
const id = document.getElementById('id');
const advice = document.getElementById('advice');

async function getapidata(url){
     
    return data;
}
console.log(getapidata(url))
dice.addEventListener('click',async ()=>{
    const res = await fetch(url)
    var data = await res.json();  
    console.log(data) 
    id.innerText = `ADVICE #${data.slip.id}`;
    advice.innerText = `"${data.slip.advice}"`;
});




