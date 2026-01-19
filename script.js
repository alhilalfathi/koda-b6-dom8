

const inputCelcius = document.getElementById("input")
const form = document.getElementById("inputParent")
const tbody = document.getElementById("tbody")


let no = 1

form.addEventListener("submit",(event)=>{
    event.preventDefault()


    function renderTbody(){
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.textContent = `${no++}`
        const td2 = document.createElement("td")
        td2.textContent = `${data.celcius.toFixed(2)}`
        const td3 = document.createElement("td")
        td3.textContent = `${data.fahrenheit.toFixed(2)}`
        const td4 = document.createElement("td")
        td4.textContent = `${data.reamur.toFixed(2)}`
        const td5 = document.createElement("td")
        td5.textContent = `${data.kelvin.toFixed(2)}`
        tr.append(td1,td2,td3,td4,td5)

        tbody.append(tr)
    }
    
    const c = parseFloat(inputCelcius.value)
    
    const data = {
        celcius: c,
        fahrenheit: (c * 9 / 5) + 32,
        reamur: c * 4 / 5,
        kelvin: c + 273.15
    }

    localStorage.setItem("konversiSuhu", JSON.stringify(data))
    renderTbody()
    
})



