const forward = document.getElementById('forward')
const back = document.getElementById('back')
const btn = document.getElementById('btn')
const monstersForm = document.getElementById('monstersForm')

let page = 1

function getMonsters(a){
    return fetch(`http://localhost:3000/monsters/?_limit=50&_page=${a}`)
    .then(res => res.json())
    .then (json => json)
}
document.addEventListener('DOMContentLoaded', function(){
    getMonsters().then(imgs => {
        imgs.forEach(element => {
            let list = document.createElement('div')
            list.innerHTML = `<h1>${element.name}</h1>
                                <h4>${element.age}</h4>
                                 <p>${element.description}`
            document.querySelector('#monster-container').append(list)
        })
    })
})

 monstersForm.addEventListener('submit', function(e){
    e.preventDefault();

    const monsterName = document.getElementById('name').value
    const monsterAge = document.getElementById('age').value
    const description = document.getElementById('description').value

    return fetch('http://localhost:3000/monsters',{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name: monsterName,
            age: monsterAge,
            description: description
        })
    })
    .then(res => res.json())
    .then(data => data);
 })

 forward.addEventListener('click', function(){
    pageUp();
})

 back.addEventListener('click', function(){
     
 })

function pageUp(){
    page++;
    getMonsters(page);
}


 

