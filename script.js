
$(document).ready(()=>{
    const inputCelcius = $("#input")
    const form = $("#inputParent")
    const tbody = $("#tbody")


    let dataKonversi = JSON.parse(localStorage.getItem("konversiSuhu")) || []
    let no = dataKonversi.length + 1


    dataKonversi.forEach((item, index) => {
        renderTbody(item, index + 1)
    })

    form.on("submit", function (e) {
        e.preventDefault()

        const c = parseFloat(inputCelcius.val())
        if (isNaN(c)) return

        const data = {
            celcius: c,
            fahrenheit: (c * 9 / 5) + 32,
            reamur: c * 4 / 5,
            kelvin: c + 273.15
        }

        dataKonversi.push(data)
        localStorage.setItem("konversiSuhu", JSON.stringify(dataKonversi))

        renderTbody(data, no++)

    })

    function renderTbody(data, nomor){
        const tr = $("<tr></tr>")

        const td1 = $(`<td>${nomor}</td>`)
        const td2 = $(`<td>${data.celcius.toFixed(2)}</td>`)
        const td3 = $(`<td>${data.fahrenheit.toFixed(2)}</td>`)
        const td4 = $(`<td>${data.reamur.toFixed(2)}</td>`)
        const td5 = $(`<td>${data.kelvin.toFixed(2)}</td>`)
        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
        
    }
})

