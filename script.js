

const inputCelcius = document.getElementById("input")
const form = document.getElementById("inputParent")
const tbody = document.getElementById("tbody")

let no = 1
form.addEventListener("submit",(event)=>{
    event.preventDefault()

    const c = parseFloat(inputCelcius.value);

    const fahrenheit = (c * 9/5) + 32;
    const reamur = c * 4/5;
    const kelvin = c + 273.15;

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${no++}</td>
        <td>${c.toFixed(2)}</td>
        <td>${fahrenheit.toFixed(2)}</td>
        <td>${reamur.toFixed(2)}</td>
        <td>${kelvin.toFixed(2)}</td>
    `

    
    tbody.appendChild(tr);

})
