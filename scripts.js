const container = document.getElementById("container")
const row = document
const body = document.querySelector("body")

for (j = 0; j<16; j++){
const row = document.createElement("div")
row.classList.add('row')

    for (i = 0; i <16; i++) {
        const div = document.createElement("div");
        div.style.height = "60px";
        div.style.width = "60px";
        div.style.backgroundColor= "white";
        div.classList.add("boxes")
        div.addEventListener("mouseover", ()=>{
            div.style.backgroundColor = "#870634"
        })
        row.appendChild(div)

    }
container.appendChild(row)
}
body.appendChild(container)

const btn = document.querySelector(".btn")
console.log(btn)
btn.addEventListener("click", ()=> {
    const divs = document.querySelectorAll(".boxes")
    divs.forEach(div => {div.remove()})
        
    number = prompt('How many squares on each side?', 16)

    for (j = 0; j< parseInt(number); j++){
        const row = document.createElement("div")
        row.classList.add('row')
        
            for (i = 0; i < parseInt(number); i++) {
                const div = document.createElement("div");
                div.style.height = `${960/number}px`;
                div.style.width = `${960/number}px`;
                div.style.backgroundColor= 'white';
                div.classList.add("boxes")
                div.addEventListener("mouseover", ()=>{
                    div.style.backgroundColor = "#870634"
                })
                row.appendChild(div)
        
            }
        container.appendChild(row)
        }
        body.appendChild(container)
    });
