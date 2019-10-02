let customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
    { id: 4, name: 'shep', email: 'shep@gmail.com'},
   ];

const customersContainer=document.getElementById("customersContainer");
const nameInput=document.getElementById("Name");
const emailInput=document.getElementById("Email");
const isVip=document.getElementById("IsVIP");
const button=document.querySelector("button");

button.addEventListener('click',(ev)=>{

    ev.preventDefault();
    console.log(customers);

    customers.push({
        name: nameInput.value,
        email: emailInput.value,
        isVIP: isVip.checked
        }
    )

    render();
})


const html = ()=>{
    return customers.map(el=>{
        return `<div class="card ${el.isVIP? "VIP":""}"><h3>${el.name}(${el.email})</h3><button class="destroy">Destroy</button></div>`
        }).join('')
}

const render=()=>{
    if(Object.keys(customers).length>0){
        customersContainer.innerHTML=html();
    }else{
        customersContainer.innerHTML='';
    }
}


render();