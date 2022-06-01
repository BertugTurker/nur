// Identifies some DOM elements
  let
    input = document.getElementById("task"),
    newList = document.getElementById("list"),
    items = document.getElementsByClassName('list-group-item'),
    button = document.getElementById("liveToastBtn"),
    ayn = document.querySelector('#samesame')
    
  // Focuses input, and calls addItem on button-click
  input.focus();
  button.addEventListener('click', addItem);

  // Defines the listener function
  function addItem() {
     
    // Trims whitespace and sets string to lowerCase
    const inputTrimmedLower = input.value.trim().toLocaleLowerCase();
    
    // Clears and refocuses input
    input.value = "";
    input.focus();
    
   // Ignores empty input
    if (!inputTrimmedLower) { return  toast0(); }
    
    // Ignores value if a list item matches it
    for (const li of items) {
      const liTrimmedLower = li.firstChild.nodeValue
      if (liTrimmedLower === inputTrimmedLower) {
         ayn.innerHTML = `${inputTrimmedLower} is already listed`
          
         toast1();
        return;
      }
    }

    // If we got this far, we want to add the new item
    let newItem = document.createElement("li")
    newItem.classList.add("list-group-item")
    newItem.append(inputTrimmedLower) // Keeps lowerCase, as your original code
    newList.append(newItem)
    toast2()
    let closeBtn = document.createElement("span")
    closeBtn.textContent = "\u00D7"
    closeBtn.classList.add("close")
    newItem.append(closeBtn)
    closeBtn.onclick = removeListItem
    newItem.onclick = checked
    saveAll()
}


  function checked() {
    this.classList.toggle("checked")
}  
  function removeListItem() {
    this.parentElement.remove();
    localStorage.removeItem('elemanlar')
    saveAll()
}


function toast0() {
   $('#liveToast').toast('hide');
   $('#liveToast1').toast('hide');

   $('#liveToast0').toast('show');
}
function toast1() {
   $('#liveToast0').toast('hide');
   $('#liveToast').toast('hide');

   $('#liveToast1').toast('show');
}
function toast2() {
  $('#liveToast0').toast('hide')
  $('#liveToast1').toast('hide')

  $('#liveToast').toast('show')
}


function saveAll() {
    var toStorage = [];
    for (var i = 0; i < items.length; i++) {
      toStorage.push(items[i].firstChild.nodeValue)
      localStorage.clear('elemanlar')
      localStorage.setItem('elemanlar', JSON.stringify(toStorage))
    }
}

function loadAll() {
  const storedvalue = JSON.parse(localStorage.getItem('elemanlar'))
    for (var i = 0; i < storedvalue.length; i++) {
      input.value = storedvalue[i]
      addItem();
    }   
}
  
loadAll();