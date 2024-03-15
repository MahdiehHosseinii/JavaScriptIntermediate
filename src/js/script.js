// let h1Elem = document.getElementById("title")
// console.log(h1Elem)

// let liElems = document.getElementsByClassName("list-item")
// console.log(liElems[2])

// let listElems = document.getElementsByTagName("li")
// console.log(listElems[3])

// let firstListItem = document.querySelector(".list-item")
// console.log(firstListItem)

// let ulItems = document.querySelectorAll(".list-item")
// console.log(ulItems)

// let h1Elem = document.getElementById("title")
// console.log(h1Elem.getAttribute("align"))

// let h1Elem = document.getElementById("title")
// h1Elem.setAttribute("class" , "text")
// console.log(h1Elem)

// let liElems = document.getElementsByClassName("list-item")
// liElems[1].setAttribute("id" , "js-text")
// console.log(liElems)

// let h1Elem = document.getElementById("title")
// h1Elem.style.color = "red"
// h1Elem.style.fontSize = "80px"
//
// let liElems = document.getElementsByClassName("list-item")
// liElems[3].style.color = "blue"
// liElems[3].style.fontWeight = "bold"

// let h1Elem = document.getElementById("title")
// console.log(h1Elem.innerHTML)
// h1Elem.innerHTML = "جاوا اسکریپت"

// let liItems = document.querySelectorAll(".list-item")
// console.log(liItems[2].innerHTML)
// liItems[2].innerHTML = "سرویس"

// let input = document.getElementById("input")
// console.log(input.value)
// input.value = "vue js"

// let select = document.getElementById("select")
// console.log(select.value)
// select.value = "Korea"

// let username = prompt("enter the username:")
// let newDivElem = document.createElement("div")
// newDivElem.innerHTML = username
// console.log(newDivElem)

// let ulElems = document.querySelector("ul")
// let newLiItem = document.createElement("li")
// newLiItem.innerHTML = "product"
// let otherLiElem = document.createElement("li")
// otherLiElem.innerHTML = "Basket"
// ulElems.append(otherLiElem)
// ulElems.append(newLiItem)
// ulElems.appendChild(otherLiElem)
// ulElems.appendChild(newLiItem)
// console.log(ulElems)

// function clickFunc () {
//     alert("click shod")
// }

// let h1Elem = document.getElementById("title")
// function clickFunc () {
//     h1Elem.style.color = "red"
// }

// let bulbImg = document.getElementById("bulb")
// let btn = document.getElementById("bulbbtn")
// let bulbFlag = false
// function turnOffOrOn () {
//     if (bulbFlag) {
//         bulbImg.setAttribute("src" , "src/images/bulboff.png")
//         btn.innerHTML = "turn on"
//         bulbFlag = false
//     }else {
//         bulbImg.setAttribute("src" , "src/images/bulbon.png")
//         btn.innerHTML = "turn off"
//         bulbFlag = true
//     }
// }

// let userNameInput = document.querySelector('.username')
// let passwordInput = document.querySelector('.password')
// let modal = document.querySelector('.modal')
//
// function dataValidation() {
//     let userNameValue = userNameInput.value
//     let passwordValue = passwordInput.value
//     if (userNameValue.length < 12 || passwordValue.length < 8) {
//         modal.style.background = 'rgb(223, 28, 28)'
//         modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
//         modal.style.display = 'inline'
//     } else {
//         modal.style.background = 'green'
//         modal.innerHTML = 'لاگین با موفقیت انجام شد'
//         modal.style.display = 'inline'
//     }
//     setTimeout(function () {
//         modal.style.display = 'none'
//     }, 3000)
// }

// function keyLog () {
//     console.log("typed")
// }

// let usernameMessage = document.querySelector(".username-validation")
// let passwordMessage = document.querySelector(".password-validation")
// let usernameInput = document.querySelector(".username")
// let passwordInput = document.querySelector(".password")
//
// function usernameValidation() {
//     if (usernameInput.value.length < 12) {
//         usernameMessage.style.color = "red"
//         usernameMessage.innerHTML = "* must contain 12 character"
//         usernameMessage.style.display = "block"
//     }else {
//         usernameMessage.style.color = "green"
//         usernameMessage.innerHTML = "correct username value"
//     }
// }
// function passwordValidation() {
//     if (passwordInput.value.length < 8) {
//         passwordMessage.style.color = "red"
//         passwordMessage.innerHTML = "* must contain 8 character"
//         passwordMessage.style.display = "block"
//     }else {
//         passwordMessage.style.color = "green"
//         passwordMessage.innerHTML = "correct password value"
//     }
// }

// function usernameFocus () {
//     console.log("focus")
// }
// function usernameBlur () {
//     console.log("blur")
// }
// function passwordFocus () {
//     console.log("focus")
// }
// function passwordBlur () {
//     console.log("blur")
// }

// let usernameInput = document.querySelector(".username")
// let passwordInput = document.querySelector(".password")
// let usernameMessage = document.querySelector(".username-validation")
// let passwordMessage = document.querySelector(".password-validation")
//
// function usernameValidation() {
//     if (usernameInput.value.length < 12) {
//         usernameMessage.innerHTML = "*must contain 12 character"
//         usernameMessage.style.color = "red"
//         usernameMessage.style.display = "block"
//     }else {
//         usernameMessage.innerHTML = "correct username value"
//         usernameMessage.style.color = "green"
//     }
// }
// function passwordValidation() {
//     if (passwordInput.value.length < 8) {
//         passwordMessage.innerHTML = "*must contain 8 character"
//         passwordMessage.style.color = "red"
//         passwordMessage.style.display = "block"
//     }else {
//         passwordMessage.innerHTML = "correct username value"
//         passwordMessage.style.color = "green"
//     }
// }

// function dblclickEvent () {
//     console.log("clicked")
// }

// let h1Elem = document.querySelector(".title")
// h1Elem.addEventListener("click" , function () {
//     console.log("clicked")
// })
// h1Elem.addEventListener("click" , clickEvent)
// function clickEvent () {
//     console.log("clicked")
// }

// let h1Elem = document.getElementById("title")
// h1Elem.addEventListener("click" , function () {
    // h1Elem.classList.add ("red")
    // h1Elem.classList.remove("sm-font")
//     h1Elem.classList.toggle("red")
// })

// let colorsArray = ["red" , "yellow" , "blue" , "green" , "pink" , "gray"]
// let randomColorIndex
// setInterval( function (){
//     randomColorIndex = Math.floor(Math.random() * colorsArray.length)
//     document.body.style.backgroundColor = colorsArray[randomColorIndex]
// },2000)

// let redValue , greenValue , blueValue
// setInterval( function (){
//     redValue = Math.floor(Math.random() * 255)
//     greenValue = Math.floor(Math.random() * 255)
//     blueValue = Math.floor(Math.random() * 255)
//     document.body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")"
// },2000)

// let countriesSelectBox = document.getElementById("countries")
// function changeHandler () {
//     console.log(countriesSelectBox.value)
// }

// let countrySelectBox = document.querySelector(".countrySelect")
// let citySelect = document.querySelector(".citySelect")
// let countriesData = {
//     Iran:["Tehran" , "Sari" , "Zanjan" , "Esfahan" , "Rasht"] ,
//     Usa:["La" , "California" , "Florida" , "Chicago" , "Havana"] ,
//     Korea:["Seoul" , "Daegu" , "Busan" , "Incheon" , "Ulsan"]
// }
// countrySelectBox.addEventListener("change" , function () {
//     if (countrySelectBox.value === "Please Select") {
//         citySelect.innerHTML = ""
//         citySelect.innerHTML += "<option>Select city</option>"
//     }else {
//         let mainCountryName = countrySelectBox.value
//         let mainCountryCities = countriesData[mainCountryName]
//         citySelect.innerHTML = ""
//         mainCountryCities.forEach(function (city) {
//             citySelect.innerHTML += "<option>" + city + "</option>"
//         })
//     }
// })

// let citiesData = {
//     Tehran:{city: "Tehran" , temp:12 , weather: "sunny" , humidity: "20%" , windSpeed:"3.2 km/h"} ,
//     Shiraz:{city: "Shiraz" , temp:17 , weather: "sunny" , humidity:"13%" , windSpeed:"1.4 km/h"} ,
//     Sari:{city: "Sari" , temp:10 , weather: "rainy" , humidity:"50%" , windSpeed:"0.3 km/h"} ,
//     Zanjan:{city: "Zanjan" , temp:2 , weather: "windy" , humidity:"10%" , windSpeed:"6.7 km/h"} ,
//     Rasht:{city: "Rasht" , temp:11 , weather: "rainy" , humidity:"67%" , windSpeed:"2.6 km/h"}
// }
// let $ = document
// let searchBtn = $.getElementById("search")
// let searchBar = $.querySelector(".search-bar")
// searchBtn.addEventListener("click" , function (){
//     let searchBarValue = searchBar.value
//     let mainCityDatas = citiesData[searchBarValue]
//     console.log(mainCityDatas)
//     if (mainCityDatas) {
//         $.querySelector(".city").innerHTML ="weather in " + mainCityDatas.city
//         $.querySelector(".temp").innerHTML = mainCityDatas.temp + "C°"
//         $.querySelector(".description").innerHTML = mainCityDatas.weather
//         $.querySelector(".humidity").innerHTML = "Humidity: " + mainCityDatas.humidity
//         $.querySelector(".wind").innerHTML = "windSpeed: " + mainCityDatas.windSpeed
//         $.querySelector(".weather").classList.remove("loading")
//     }else {
//         alert("not correct")
//     }
// })

// let citiesData = [
//     {city: "Tehran" , temp:12 , weather: "sunny" , humidity: "20%" , windSpeed:"3.2 km/h"} ,
//     {city: "Shiraz" , temp:17 , weather: "sunny" , humidity:"13%" , windSpeed:"1.4 km/h"} ,
//     {city: "Sari" , temp:10 , weather: "rainy" , humidity:"50%" , windSpeed:"0.3 km/h"} ,
//     {city: "Zanjan" , temp:2 , weather: "windy" , humidity:"10%" , windSpeed:"6.7 km/h"} ,
//     {city: "Rasht" , temp:11 , weather: "rainy" , humidity:"67%" , windSpeed:"2.6 km/h"}
// ]
// let $ = document
// let searchBtn = $.getElementById("search")
// let searchBar = $.querySelector(".search-bar")
// searchBtn.addEventListener("click" , function (){
//     let searchBarValue = searchBar.value
//     let mainCityDatas = citiesData.find(function (item){
//         return item.city === searchBarValue
//     })
//     console.log(mainCityDatas)
//     if (mainCityDatas) {
//         $.querySelector(".city").innerHTML ="weather in " + mainCityDatas.city
//         $.querySelector(".temp").innerHTML = mainCityDatas.temp + "C°"
//         $.querySelector(".description").innerHTML = mainCityDatas.weather
//         $.querySelector(".humidity").innerHTML = "Humidity: " + mainCityDatas.humidity
//         $.querySelector(".wind").innerHTML = "windSpeed: " + mainCityDatas.windSpeed
//         $.querySelector(".weather").classList.remove("loading")
//     }else {
//         alert("not correct")
//     }
// })

// let ulElem = document.querySelector("ul")
// function addNewLi () {
//     let newLiTag = document.createElement("li")
//     let secondLiTag = document.createElement("li")
//     newLiTag.innerHTML = "products"
//     secondLiTag.innerHTML = "users"
    // ulElem.append(newLiTag)
    // ulElem.appendChild(newLiTag)
    // ulElem.append("products")
    // ulElem.appendChild("products")
    // ulElem.append(newLiTag , secondLiTag)
    // ulElem.appendChild(newLiTag , secondLiTag)
// }

// function keyDownHandler () {
//     console.log("key down")
// }
// function keyPressHandler () {
//     console.log("key press")
// }
// function keyUpHandler () {
//     console.log("key up")
// }

let $ = document
const firstValue = $.querySelector(".C")
const secondValue = $.querySelector(".F")
const converter = $.querySelector("#converter")
const result = $.querySelector(".result")
const convertButton = $.querySelector(".convertButton")
const resetButton = $.querySelector(".resetButton")
const changeButton = $.querySelector(".changeButton")
function convert () {

}
function reset () {

}
function swap () {

}
convertButton.addEventListener("click" , convert)
resetButton.addEventListener("click" , reset)
changeButton.addEventListener("click" , swap)
