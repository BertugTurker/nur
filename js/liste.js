let btnDOM = document.querySelector('#liveToastBtn')
let inputDOM = document.querySelector('#task')
let listDOM = document.querySelector('#list')

btnDOM.addEventListener('click', newElement)

function newElement() {
   if (inputDOM.value == "") {
       console.log("boş")
       $('#liveToast0').toast('show')
   } else {
    let liDOM = document.createElement('li')
    listDOM.append(liDOM)
    liDOM.innerHTML = inputDOM.value
    inputDOM.value = ""
   }
}