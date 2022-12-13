



let inpEl = document.getElementById("inp-id")
console.log(inpEl)
let mass = document.getElementById("massId")
let volume = document.getElementById("volumeId")
let length = document.getElementById("lengthId")
function conversion(){
    console.log(inpEl.value)
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
let meter = parseFloat(3.281*inpEl.value).toFixed(2)+" feet"
let liter = parseFloat(0.264*inpEl.value).toFixed(2) +" gallon"
let kilogram = parseFloat(2.204*inpEl.value).toFixed(2) + " pound"
    console.log("oh yeahh")
mass.textContent=kilogram
volume.textContent=liter
length.textContent=meter
}



