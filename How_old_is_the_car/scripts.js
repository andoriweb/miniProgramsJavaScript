
function check () {
    
  let currentYear = new Date().getFullYear()
  let carYear = document.getElementById('carYear').value
  let carAge = currentYear - carYear
  let result1 = document.getElementById('result1')
  let result2 = document.getElementById('result2')
  let result3 = document.getElementById('result3')
  
  result1.innerHTML = carAge

  if (carAge < 5) {
      result2.innerHTML = 'Машина новая'
  } else if (carAge >= 5 && carAge <= 10) {
      result2.innerHTML = 'Машина нормальная'
  } else if (carAge >= 20) {
      result2.innerHTML = 'Машина пипец какая старая !!!'
  } else {
      result2.innerHTML = 'Машина старая'
  }

  if (carAge == 1 || carAge == 21 || carAge == 31 || carAge == 41 || carAge == 51) {
      result3.innerHTML = ' год.'
  } else if (carAge > 1 && carAge < 5) {
      result3.innerHTML = ' года.'
  } else {
      result3.innerHTML = ' лет.'
  }
}