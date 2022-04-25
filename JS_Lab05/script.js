var form = document.getElementById("form")

/**
 * @param {SubmitEvent} e
 */
function handleSubmit(e) {
    e.preventDefault()

    var sideA = e.target.elements.sideA.value
    var sideB = e.target.elements.sideB.value
    var sideC = e.target.elements.sideC.value
    var perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)
    
    alert(isNaN(perimeter) ? `Wrong input` : `P = ${perimeter}`)
}

form.onsubmit = handleSubmit