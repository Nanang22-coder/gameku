var button = document.querySelectorAll(".btn")
var nilai1 = document.getElementById("input1")
var nilai2 = document.getElementById("input2")
var result = document.getElementById("result")
var calculator = document.getElementById("  ")
  for(i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
  var target = e.target.getAttribute("value")
  var a = parseInt(nilai1.value)
  var b = parseInt(nilai2.value)
  if(target === "tambah") 
  result.innerHTML = a + b
  if(target === "kurang")
  result.innerHTML = a - b
  if(target === "bagi")
  result.innerHTML = a / b
  if(target === "kali")
  result.innerHTML = a * b
  if(target === "reset")
  {
    nilai1.value = " "
    nilai2.value = " "
    result.innerHTML = 0 }
  
  }) }
  
