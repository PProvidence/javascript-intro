

const submitForm = () => {
 const name = document.getElementById('name').value

  if (!name) return alert('Oops No name submitted')

  greet(name)

}


function greet(name) {
  alert(`Hello ${name}`)
  // alert('Hello ' + personName)
}

