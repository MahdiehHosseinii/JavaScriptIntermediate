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
//         passwordMessage.innerHTML = "correct password value"
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

// let $ = document
// const firstValue = $.querySelector(".C")
// const secondValue = $.querySelector(".F")
// const converter = $.querySelector("#converter")
// const result = $.querySelector(".result")
// const convertButton = $.querySelector(".convertButton")
// const resetButton = $.querySelector(".resetButton")
// const changeButton = $.querySelector(".changeButton")
//
// function convert() {
//     if (converter.value === "") {
//         result.innerHTML = "insert correct value!"
//         result.style.color = "#993300"
//     } else {
//         if (firstValue.innerHTML === "°C") {
//             let resultValue = (converter.value * 1 / 8) + 32
//             result.innerHTML = converter.value + "°C to " + resultValue + "°F"
//             result.style.color = "rgb(255, 255, 102)"
//         } else {
//             let resultValue = (converter.value - 32) * 5 / 9
//             result.innerHTML = converter.value + "°F to " + resultValue.toFixed(2) + "°C"
//             result.style.color = "rgb(255, 255, 102)"
//         }
//     }
// }
//
// function reset() {
//     result.innerHTML = ""
//     converter.value = ""
// }
//
// function swap() {
//     if (firstValue.innerHTML === "°C") {
//         firstValue.innerHTML = "°F"
//         secondValue.innerHTML = "°C"
//         converter.setAttribute("placeholder", "°F")
//         document.title = "SalzLearn| Js | °F to °C"
//     } else {
//         firstValue.innerHTML = "°C"
//         secondValue.innerHTML = "°F"
//         converter.setAttribute("placeholder", "°C")
//         document.title = "SalzLearn| Js | °C to °F"
//     }
// }
//
// convertButton.addEventListener("click", convert)
// resetButton.addEventListener("click", reset)
// changeButton.addEventListener("click", swap)

// let h1Elem = document.getElementById("title")
// console.log(h1Elem.className)
// console.log(h1Elem.getAttribute("class"))

// let userInput = document.getElementById("input")
// console.log(userInput.value)
// console.log(userInput.getAttribute(name))
// userInput.location = "Iran"
// console.log(userInput.location)
// console.log(userInput.getAttribute("location"))

// let inputElem = document.getElementById("input")
// console.log(inputElem.hasAttribute("placeholder"))

// function removeatthandler () {
//     inputElem.removeAttribute("placeholder")
// }

// let btn = document.getElementById("btn")
// btn.onclick = showLog
// function showLog () {
//     console.log("clicked")
// }
// btn.onclick = function () {
//     console.log("clicked")
// }

// let loginForm = document.getElementById("login-form")
// loginForm.addEventListener("submit", function () {
//     console.log("submit shod")
// })

// let logBtn = document.getElementById("btn")
// let usernameInput = document.getElementById("username")
// logBtn.addEventListener("click" , function (event){
//     console.log(event)
// })
// usernameInput.addEventListener("keydown" , function (event){
//     console.log(event)
// })

// let loginForm = document.getElementById("form")
// let usernameInput = document.getElementById("username")
// loginForm.addEventListener("submit", function (event) {
//     event.preventDefault()
//     console.log(event)
// })
// usernameInput.addEventListener("keydown", function (event) {
//     console.log(event)
// })

// let $ = document
// let locationKey = $.querySelector("#location")
// let title = $.querySelector("title")
// let keyCodeElem = $.getElementById("keyCode")
// let keyElem = $.getElementById("key")
// let locationElem = $.getElementById("location")
// let whichElem = $.getElementById("which")
// let codeElem = $.getElementById("code")
// document.body.addEventListener("keydown" , function (event){
//     event.preventDefault()
//     starter.style.display="none"
//     heading.style.display="flex"
//     ascii.style.display="flex"
//     infos.style.display="flex"
//     let eventKeyCode = event.keyCode
//     let eventKey = event.key
//     let eventLocation = event.location
//     let eventWhich = event.which
//     let eventCode = event.code
//     keyCodeElem.innerHTML = eventKeyCode
//     keyElem.innerHTML = eventKey
//     locationElem.innerHTML = eventLocation
//     whichElem.innerHTML = eventWhich
//     codeElem.innerHTML = eventCode
// })

// let h1Elem = document.getElementById("title")
// console.log(h1Elem.nodeName)
// console.log(h1Elem.nodeType)
// console.log(h1Elem.nodeValue)

// let head1 = document.getElementById("head1")
// let head2 = document.getElementById("head2")
// let head3 = document.getElementById("head3")
// let head4 = document.getElementById("head4")
// let head5 = document.getElementById("head5")
// let head6 = document.getElementById("head6")
// let listItem = document.getElementsByClassName("list-item")
// let list = document.getElementById("list")
// console.log(head3.parentNode)
// console.log(head3.parentElement)
// console.log(head3.previousElementSibling)
// console.log(head3.nextElementSibling)
// console.log(listItem[3].nextSibling)
// console.log(listItem[2].nextElementSibling)
// console.log(listItem[2].previousElementSibling)
// console.log(listItem[2].previousSibling.previousSibling)
// console.log(list.childElementCount)
// console.log(list.children[3])
// console.log(list.childNodes)
// console.log(list.hasChildNodes())
// console.log(list.firstChild)
// console.log(list.lastChild)
// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

// let $ = document;
//
// function _id(id_name) {
//     return $.getElementById(id_name);
// }
//
// function _class(class_name) {
//     return $.getElementsByClassName(class_name);
// }
//
// let togglePassword = _class("toggle-password");
// let passwordField = _id("password-field");
// togglePassword[0].addEventListener("click", function () {
//     if (passwordField.type === "text") {
//         passwordField.type = "password";
//         togglePassword[0].classList.remove("active");
//     } else {
//         passwordField.type = "text";
//         togglePassword[0].classList.add("active");
//     }
// })

// let title = document.getElementById("title")
// let btn = document.getElementById("button")
// let titleText = document.getElementsByClassName("text")
// let listItems = document.querySelectorAll(".list-item")
// btn.addEventListener("click" , function (){
//     titleText[0].remove()
// })
// listItems.forEach(function (li) {
//     li.addEventListener("click" , function (event) {
//         event.target.parentElement.remove()
//     })
// })

// let $ = document
// let inputElem = $.querySelector("input")
// let addTodoForm = $.querySelector(".add")
// let todoUlElem = $.querySelector(".todos")
// function addNewTodo(newTodoValue) {
//     let newTodoLi = $.createElement("li")
//     newTodoLi.className = "list-group-item d-flex justify-content-between align-items-center"
//     let newTodoTitleSpan = $.createElement("span")
//     newTodoTitleSpan.innerHTML = newTodoValue
//     let newTodoTrash = $.createElement("i")
//     newTodoTrash.className = "fa fa-trash-o delete"
//     newTodoTrash.addEventListener("click", function (event) {
//         event.target.parentElement.remove()
//     })
//     newTodoLi.append(newTodoTitleSpan, newTodoTrash)
//     todoUlElem.append(newTodoLi)
// }
// addTodoForm.addEventListener("submit", function (event) {
//     event.preventDefault()
// })
// inputElem.addEventListener("keydown", function (event) {
//     let newTodoValue = event.target.value.trim()
//     if (event.keyCode === 13) {
//         if (newTodoValue) {
//             inputElem.value = ""
//             addNewTodo(newTodoValue)
//         }
//     }
// })

// function clickHandler () {
//     console.log("click")
// }
// function contextMenuHandler () {
//     console.log("right click")
// }

// let editorElem = document.getElementById("editor")
// function copyHandler (event) {
//     event.preventDefault()
// }
// function cutHandler (event) {
//     event.preventDefault()
// }
// function pasteHandler (event) {
//     event.preventDefault()
// }
// editorElem.addEventListener("copy" , copyHandler)
// editorElem.addEventListener("cut" , cutHandler)
// editorElem.addEventListener("paste" , pasteHandler)

// function clickHandler(event) {
//     console.log(event)
// }

// let contextMenu = document.getElementById("contextMenu")
// function contextHandler(event) {
//     event.preventDefault()
//     if (contextMenu.style.display === "none") {
//         contextMenu.style.left = event.pageX + "px"
//         contextMenu.style.top = event.pageY + "px"
//         contextMenu.style.display = "block"
//     }else {
//         contextMenu.style.left = event.pageX + "px"
//         contextMenu.style.top = event.pageY + "px"
//     }
// }
// function hideContextMenu() {
//     contextMenu.style.display = "none"
// }
// function keyDownHandler (event) {
//     if (event.keyCode === 27) {
//         contextMenu.style.display = "none"
//     }
// }
// document.body.addEventListener("contextmenu", contextHandler)
// document.body.addEventListener("click", hideContextMenu)
// document.body.addEventListener("keydown", keyDownHandler)

// function loadHandler() {
//     console.log("loaded")
// }


// document.addEventListener("DOMContentLoaded" , function () {
//     console.log("DOM content loaded")
// })

// const loaderElem = document.querySelector(".loader")
// window.addEventListener("load" , function () {
//     loaderElem.classList.add("hidden")
//     loaderElem.className += " hidden"
// })

// function unloadHandler() {
//     console.log("unloaded")
// }

// const boxElem = document.getElementById("box")
// const btnElem = document.getElementById("btn")
//
// function mouseMoveHandler() {
//     console.log("moved")
// }
//
// function removeHandler() {
//     boxElem.removeEventListener("mousemove", mouseMoveHandler)
// }
//
// btnElem.addEventListener("click", removeHandler)
// boxElem.addEventListener("mousemove", mouseMoveHandler)

// function selectHandler() {
//     console.log("selected")
// }

// function touchHandler() {
//     console.log("touched")
// }

// let $ = document
//
// const inputElem = $.querySelector('input')
// const spanElem = $.querySelector('.counter')
// const inputMaxLength = inputElem.getAttribute('maxlength')
//
// inputElem.addEventListener('keyup', function () {
//     spanElem.innerHTML = inputMaxLength - inputElem.value.length
// })

// let $ = document
// const button = $.querySelector("button")
// const modalParent = $.querySelector(".modal-parent")
// const x = $.querySelector(".X")
// const section = $.querySelector("section")
//
// function showModal() {
//     modalParent.style.display = "block"
//     section.style.filter = "blur(6px)"
//     button.blur()
// }
//
// function closeModal() {
//     modalParent.style.display = "none"
//     section.style.filter = "blur(0px)"
// }
//
// function closeModalWithEsc(event) {
//     if (event.keyCode === 27) {
//         modalParent.style.display = "none"
//         section.style.filter = "blur(0px)"
//     }
// }
//
// button.addEventListener("click", showModal)
// x.addEventListener("click", closeModal)
// document.body.addEventListener("keyup", closeModalWithEsc)

//NoteApp
// let $ = document
// const inputElem = $.querySelector("#input-field")
// const btnSaveElem = $.querySelector("#btn-save")
// const btnDeleteElem = $.querySelector("#btn-delete")
// const colorsBox = $.querySelectorAll(".color-box")
// const notesContainer = $.querySelector("#listed")
// colorsBox.forEach(function (colorBox) {
//     colorBox.addEventListener("click", function (event) {
//         let mainColor = event.target.style.backgroundColor
//         inputElem.style.backgroundColor = mainColor
//     })
// })
//
// function generateNewNote() {
//     let newNoteDivElem = $.createElement("div")
//     newNoteDivElem.className = "card shadow-sm rounded"
//     let inputBg = inputElem.style.backgroundColor
//     newNoteDivElem.style.backgroundColor = inputBg
//     newNoteDivElem.addEventListener("click", removeNote)
//     let newNotePElem = $.createElement("p")
//     newNotePElem.className = "card-text p-3"
//     newNotePElem.innerHTML = inputElem.value
//     newNoteDivElem.append(newNotePElem)
//     notesContainer.append(newNoteDivElem)
//     inputElem.value = ""
//     inputElem.style.backgroundColor = "#ffff"
// }
//
// function removeNote(event) {
//     event.target.parentElement.remove()
// }
//
// btnDeleteElem.addEventListener("click", function () {
//     inputElem.value = ""
//     inputElem.style.backgroundColor = "#ffff"
// })
// inputElem.addEventListener("keydown", function (event) {
//     if (event.keyCode === 13) {
//         if (inputElem.value) {
//             generateNewNote()
//         }
//     }
// })
// btnSaveElem.addEventListener("click", generateNewNote)

// function scrollHandler(event) {
//     console.log(event)
// }

// const mainNav = document.getElementById("mainNav")
// const logoImg = document.querySelector("img")
// document.addEventListener("scroll" , function () {
//     if (document.documentElement.scrollTop > 0) {
//         mainNav.classList.add("bg-black")
//         mainNav.classList.add("txt-white")
//         logoImg.style.height = "64px"
//     }else {
//         logoImg.style.height = "84px"
//         mainNav.classList.remove("bg-black")
//         mainNav.classList.remove("txt-white")
//     }
// })

// function scrollTopHandler() {
//     window.scrollTo(0 , 0)
// }
// function scrollDownHandler() {
//     window.scrollBy(0 , 50)
// }

// function showDataId (event) {
//     console.log(event.target.dataset)
// }

// let audioElem = document.querySelector("audio")
// let timeElem = document.querySelector("#time")
// function playHandler () {
//     audioElem.play()
//     setInterval(function () {
//         timeElem.innerHTML = "00:" + "0" + Math.floor(audioElem.currentTime)
//     }, 1000)
// }
// function pauseHandler () {
//     audioElem.pause()
// }
// function durationHandler () {
//     console.log("duration" , audioElem.duration)
// }
// function playBackRateHandler() {
//     audioElem.playbackRate = 2
// }
// function currentTimeHandler () {
//     console.log("current time: " , Math.floor(audioElem.currentTime))
// }

// let audioElem = document.querySelector("audio")
// let musicSrc = [
//     "src/audio/InSeri.mp3",
//     "src/audio/Yadetim.mp3",
//     "src/audio/barMikhore.mp3"
// ]
// let audioIndex = 0
//
// function previousMusicHandler() {
//     audioIndex--
//     if (audioIndex < 0) {
//         audioIndex = 2
//     }
//     audioElem.setAttribute("src", musicSrc[audioIndex])
//     playHandler()
// }
//
// function playHandler() {
//     audioElem.play()
//     setInterval(function () {
//         console.log(audioElem.currentTime)
//     }, 1000)
// }
//
// function pauseHandler() {
//     audioElem.pause()
// }
//
// function nextMusicHandler() {
//     audioIndex++
//     if (audioIndex > musicSrc.length - 1) {
//         audioIndex = 0
//     }
//     audioElem.setAttribute("src", musicSrc[audioIndex])
//     playHandler()
// }
//
// function speedHandler() {
//     audioElem.playbackRate = 2
// }
//
// function timeMinusMusicHandler() {
//     audioElem.currentTime -= 5
// }
//
// function timePlusMusicHandler() {
//     audioElem.currentTime += 5
// }

const image = document.querySelector("#cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const background = document.getElementById("background");

// Music
const songs = [
    {
        path:
            "src/audio/InSeri.mp3",
        displayName: "In Seri",
        artist: "Shayea & Rez",
        cover:
            "src/images/shayea.jpg",
    },
    {
        path: "src/audio/BarMikhore.mp3",
        displayName: "Yeho Yeja BarMikhore Bet",
        artist: "Shayea & Tara",
        cover: "src/images/shayea3.jpg",
    },
    {
        path:
            "src/audio/Yadetim.mp3",
        displayName: "Yadetim Koli",
        artist: "Shayea & Mahyar",
        cover:
            "src/images/shayea2.jpg",
    },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", function () {
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Update DOM
function loadSong(song) {
    console.log(song);
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = song.path;
    changeCover(song.cover);
}

function changeCover(cover) {
    image.classList.remove("active");
    setTimeout(() => {
        image.src = cover;
        image.classList.add("active");
    }, 100);
    background.src = cover;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
    if (isPlaying) {
        const duration = e.srcElement.duration;
        const currentTime = e.srcElement.currentTime;
        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + "%";
        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        // Delay switching duration Element to avoid NaN
        if (durationSeconds) {
            durationEl.textContent = durationMinutes + ":" + durationSeconds;
        }
        // Calculate display for currentTime
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
    }
}

// Set Progress Bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);














