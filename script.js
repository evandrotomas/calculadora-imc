document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form')
  const nameInput = document.getElementById('name')
  const nameError = document.getElementById('name-error')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (!nameInput.value) {
      nameError.style.display = 'block'
      return
    } else {
      nameError.style.display = 'none'
    }

    const name = nameInput.value
    const height = parseFloat(document.getElementById('height').value)
    const weight = parseFloat(document.getElementById('weight').value)

    const imc = weight / (height * height)
    const elementResult = document.getElementById('result')

    let category

    if (imc < 18.5) {
      category = 'Abaixo do peso'
      elementResult.style.backgroundColor = '#ffff00'
    } else if (imc < 25) {
      category = 'Peso normal'
      elementResult.style.backgroundColor = '#00ff00'
    } else if (imc < 30) {
      category = 'Sobrepeso'
      elementResult.style.backgroundColor = '#ffa500'
    } else {
      category = 'Obesidade'
      elementResult.style.backgroundColor = '#ff0000'
    }

    elementResult.innerHTML = `<p>${name}, seu IMC é ${imc.toFixed(
      2
    )}.</p><p>Você está na categoria: ${category}</p>`

    // Atualizar a categoria - input
    document.getElementById('category').value = category
    let data = new FormData(form)

    for (let [key, value] of data.entries()) [console.log(key + ' : ' + value)]
  })
})
