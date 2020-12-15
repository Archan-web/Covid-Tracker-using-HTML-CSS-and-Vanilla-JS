const container=document.getElementById('container');
const total= document.getElementById('titleDiv');
const newReq= new XMLHttpRequest();
const newReq2= new XMLHttpRequest();
newReq.open('GET','https://api.covidindiatracker.com/state_data.json');
newReq2.open('GET','https://api.covidindiatracker.com/total.json')
newReq.onload=()=>{
    let pr=JSON.parse(newReq.responseText);
    let str=""
    for(let i=0;i<pr.length;i++){
        str+=`<ul><li>${pr[i].state}</li><li>${pr[i].confirmed}</li><li>${pr[i].active}</li><li>${pr[i].recovered}</li><li>${pr[i].deaths}</li></ul>`;
    }
    container.innerHTML=str;
}
newReq2.onload=()=>{
    let pr=JSON.parse(newReq2.responseText);
    let str=`<ul class="total" id="total2">
    <li class="lst">Total</li>
    <li class="lst">Confirmed</li>
    <li class="lst">Active</li>
    <li class="lst">Recovered</li>
    <li class="lst">Deceased</li>
    </ul><ul><li>${pr.state}</li><li>${pr.confirmed}</li><li>${pr.active}</li><li>${pr.recovered}</li><li>${pr.deaths}</li></ul>`
    console.log(pr);
    total.innerHTML=str;
}
newReq.send();
newReq2.send();