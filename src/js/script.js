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

// const image = document.querySelector("#cover");
// const title = document.getElementById("title");
// const artist = document.getElementById("artist");
// const music = document.querySelector("audio");
// const currentTimeEl = document.getElementById("current-time");
// const durationEl = document.getElementById("duration");
// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");
// const prevBtn = document.getElementById("prev");
// const playBtn = document.getElementById("play");
// const nextBtn = document.getElementById("next");
// const background = document.getElementById("background");
//
// // Music
// const songs = [
//     {
//         path:
//             "src/audio/InSeri.mp3",
//         displayName: "In Seri",
//         artist: "Shayea & Rez",
//         cover:
//             "src/images/shayea.jpg",
//     },
//     {
//         path: "src/audio/BarMikhore.mp3",
//         displayName: "Yeho Yeja BarMikhore Bet",
//         artist: "Shayea & Tara",
//         cover: "src/images/shayea3.jpg",
//     },
//     {
//         path:
//             "src/audio/Yadetim.mp3",
//         displayName: "Yadetim Koli",
//         artist: "Shayea & Mahyar",
//         cover:
//             "src/images/shayea2.jpg",
//     },
// ];
//
// // Check if Playing
// let isPlaying = false;
//
// // Play
// function playSong() {
//     isPlaying = true;
//     playBtn.classList.replace("fa-play", "fa-pause");
//     playBtn.setAttribute("title", "Pause");
//     music.play();
// }
//
// // Pause
// function pauseSong() {
//     isPlaying = false;
//     playBtn.classList.replace("fa-pause", "fa-play");
//     playBtn.setAttribute("title", "Play");
//     music.pause();
// }
//
// // Play or Pause Event Listener
// playBtn.addEventListener("click", function () {
//     if (isPlaying) {
//         pauseSong()
//     } else {
//         playSong()
//     }
// })
//
// // Update DOM
// function loadSong(song) {
//     console.log(song);
//     title.textContent = song.displayName;
//     artist.textContent = song.artist;
//     music.src = song.path;
//     changeCover(song.cover);
// }
//
// function changeCover(cover) {
//     image.classList.remove("active");
//     setTimeout(() => {
//         image.src = cover;
//         image.classList.add("active");
//     }, 100);
//     background.src = cover;
// }
//
// // Current Song
// let songIndex = 0;
//
// // Previous Song
// function prevSong() {
//     songIndex--;
//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }
//     loadSong(songs[songIndex]);
//     playSong();
// }
//
// // Next Song
// function nextSong() {
//     songIndex++;
//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }
//     loadSong(songs[songIndex]);
//     playSong();
// }
//
// // On Load - Select First Song
// loadSong(songs[songIndex]);
//
// // Update Progress Bar & Time
// function updateProgressBar(e) {
//     if (isPlaying) {
//         const duration = e.srcElement.duration;
//         const currentTime = e.srcElement.currentTime;
//         // Update progress bar width
//         const progressPercent = (currentTime / duration) * 100;
//         progress.style.width = progressPercent + "%";
//         // Calculate display for duration
//         const durationMinutes = Math.floor(duration / 60);
//         let durationSeconds = Math.floor(duration % 60);
//         if (durationSeconds < 10) {
//             durationSeconds = "0" + durationSeconds;
//         }
//         // Delay switching duration Element to avoid NaN
//         if (durationSeconds) {
//             durationEl.textContent = durationMinutes + ":" + durationSeconds;
//         }
//         // Calculate display for currentTime
//         const currentMinutes = Math.floor(currentTime / 60);
//         let currentSeconds = Math.floor(currentTime % 60);
//         if (currentSeconds < 10) {
//             currentSeconds = "0" + currentSeconds;
//         }
//         currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
//     }
// }
//
// // Set Progress Bar
// function setProgressBar(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = music.duration;
//     music.currentTime = (clickX / width) * duration;
// }
//
// // Event Listeners
// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);
// music.addEventListener("ended", nextSong);
// music.addEventListener("timeupdate", updateProgressBar);
// progressContainer.addEventListener("click", setProgressBar);

// let $ = document
// const players = $.querySelectorAll(".fa-play")
// const audios = $.querySelectorAll("audio")
// let musicName;
// players.forEach(function (player) {
//     player.addEventListener("click" , function (event) {
//         musicName = event.target.dataset.name
//         audios.forEach(function (audio) {
//             if (audio.dataset.name === musicName) {
//                 audio.play()
//             } else {
//                 audio.pause()
//             }
//         })
//     })
// })

// console.log(document.querySelector("h1"))

// function dragStartHandler(event) {
//     event.dataTransfer.setData("elemId", event.target.id)
// }
//
// function dropHandler(event) {
//     let targetId = event.dataTransfer.getData("elemId")
//     let targetElem = document.getElementById(targetId)
//     event.target.append(targetElem)
// }
//
// function dragOverHandler(event) {
//     event.preventDefault()
// }

// let $ = document
// const newTodo = $.getElementById("add_btn")
// const modalInput = $.querySelector(".modal")
//
//
//
// newTodo.addEventListener("click" , function () {
//     modalInput.style.display = "block"
// })

// function insertName () {
//     localStorage.setItem("name" , "amir")
//     console.log("Insert Name")
// }
// function getName () {
//     let localName = localStorage.getItem("name")
//     console.log(localName)
// }
// function cleanData () {
//     localStorage.clear()
// }

// const switchElement = document.querySelector('.switch')
//
// switchElement.addEventListener('click', function () {
//     document.body.classList.toggle("dark")
//     if (document.body.className.includes("dark")) {
//         localStorage.setItem("theme", "dark")
//     } else {
//         localStorage.setItem("theme", "light")
//     }
// })
// window.onload = function () {
//     let localStorageTheme = localStorage.getItem("theme")
//     if (localStorageTheme === "dark") {
//         document.body.classList.add("dark")
//     }
// }

// let $ = document
// const inputElem = $.getElementById('itemInput')
// const addButton = $.getElementById('addButton')
// const clearButton = $.getElementById('clearButton')
// const todoListElem = $.getElementById('todoList')
//
// let todosArray = []
//
// function addNewTodo() {
//     let newTodoTitle = inputElem.value
//
//     let newTodoObj = {
//         id: todosArray.length + 1,
//         title: newTodoTitle,
//         complete: false
//     }
//
//     inputElem.value = ''
//
//     todosArray.push(newTodoObj)
//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)
//
//     inputElem.focus()
// }
//
// function setLocalStorage(todosList) {
//     localStorage.setItem('todos', JSON.stringify(todosList))
// }
//
// function todosGenerator(todosList) {
//
//     let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn
//
//     todoListElem.innerHTML = ''
//
//     todosList.forEach(function (todo) {
//         console.log(todo);
//         newTodoLiElem = $.createElement('li')
//         newTodoLiElem.className = 'completed well'
//
//         newTodoLabalElem = $.createElement('label')
//         newTodoLabalElem.innerHTML = todo.title
//
//         newTodoCompleteBtn = $.createElement('button')
//         newTodoCompleteBtn.className = 'btn btn-success'
//         newTodoCompleteBtn.innerHTML = 'Complete'
//         newTodoCompleteBtn.setAttribute('onclick', 'editTodo(' + todo.id + ')')
//
//         newTodoDeleteBtn = $.createElement('button')
//         newTodoDeleteBtn.className = 'btn btn-danger'
//         newTodoDeleteBtn.innerHTML = 'Delete'
//         newTodoDeleteBtn.setAttribute('onclick', 'removeTodo(' + todo.id + ')')
//
//         if (todo.complete) {
//             newTodoLiElem.className = 'uncompleted well'
//             newTodoCompleteBtn.innerHTML = 'UnComplete'
//         }
//
//         newTodoLiElem.append(newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn)
//
//         todoListElem.append(newTodoLiElem)
//     })
// }
//
// function editTodo(todoId) {
//
//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
//
//     todosArray = localStorageTodos
//
//     todosArray.forEach(function (todo) {
//         if (todo.id === todoId) {
//             todo.complete = !todo.complete
//         }
//     })
//
//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)
// }
//
// function removeTodo(todoId) {
//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
//
//     todosArray = localStorageTodos
//
//     let mainTodoIndex = todosArray.findIndex(function (todo) {
//         return todo.id === todoId
//     })
//
//     todosArray.splice(mainTodoIndex, 1)
//
//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)
//
// }
//
// function getLocalStorage() {
//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
//
//     if (localStorageTodos) {
//         todosArray = localStorageTodos
//     } else {
//         todosArray = []
//     }
//
//     todosGenerator(todosArray)
//
// }
//
// function clearTodos() {
//     todosArray = []
//     todosGenerator(todosArray)
//     localStorage.removeItem('todos')
// }
//
//
// window.addEventListener('load', getLocalStorage)
// addButton.addEventListener('click', addNewTodo)
// clearButton.addEventListener('click', clearTodos)
// inputElem.addEventListener('keydown', function (event) {
//     if (event.code === 'Enter') {
//         addNewTodo()
//     }
// })

// const addAnimationBtn = document.querySelector("button")
// const divElem = document.querySelector("div")
// const pElem = document.querySelector("p")
//
// function setAnimation () {
//     divElem.style.animation = "move 4s 3"
// }
//
// function animationStartHandler () {
//     pElem.innerHTML = "Animation Start"
//     divElem.style.backgroundColor = "pink"
// }
// function animationRepeatHandler () {
//     pElem.innerHTML = "Animation Repeat"
//     divElem.style.backgroundColor = "lightblue"
// }
// function animationEndHandler () {
//     pElem.innerHTML = "Animation End"
//     divElem.style.backgroundColor = "gray"
// }
//
// addAnimationBtn.addEventListener("click" , setAnimation)
//
// divElem.addEventListener("animationstart" , animationStartHandler)
// divElem.addEventListener("animationiteration" , animationRepeatHandler)
// divElem.addEventListener("animationend" , animationEndHandler)

// const rangeInput = document.querySelector("input")
// const container = document.querySelector(".container")
//
// rangeInput.addEventListener("change", function (event) {
//     container.style.filter = "brightness(" + event.target.value + "%)"
// })

// const boxElem = document.querySelector(".box")
// console.log(boxElem.style.fontSize)
// let boxElemStyles = getComputedStyle(boxElem)
// console.log(boxElemStyles.backgroundColor)
// let boxElemHeight = getComputedStyle(boxElem).getPropertyValue("height")
// console.log(boxElemHeight)

// let number = 12
// const pElem = document.querySelector("p")
// const inputElem = document.querySelector("input")
// const buttonElem = document.querySelector("button")
// try {
//     console.log(x)
// } catch (err) {
//     pElem.innerHTML = err.message
// }
// function checkValue() {
//     try {
//         if (inputElem.value.length > 8) {
//             throw "too high"
//         } else {
//             throw "too low"
//         }
//     } catch (err) {
//         pElem.innerHTML = err
//     } finally {
//         inputElem.value = ""
//     }
// }
// buttonElem.addEventListener("click", checkValue)

// const h1Elem = document.querySelector("h1")
//
// function styleHandler() {
//     // h1Elem.style.color = "red"
//     // h1Elem.style.backgroundColor = "pink"
//     // h1Elem.style.fontSize = "50px"
//     h1Elem.style.cssText = "color: red; background-color:pink; font-size:50px;"
// }

// let $ = document
// let sliderImgElem = $.querySelector("img")
// let previousBtn = $.querySelector(".prev")
// let nextBtn = $.querySelector(".next")
// let imgSrcArray = ["src/images/1.jpg", "src/images/2.png", "src/images/3.jpg"]
// let imgIndex = 0
//
// function prevImg() {
//     imgIndex--
//     if (imgIndex < 0) {
//         imgIndex = imgSrcArray.length - 1
//     }
//     sliderImgElem.setAttribute("src", imgSrcArray[imgIndex])
// }
//
// function nextImg() {
//     imgIndex++
//     if (imgIndex > imgSrcArray.length - 1) {
//         imgIndex = 0
//     }
//     sliderImgElem.setAttribute("src", imgSrcArray[imgIndex])
// }
//
// setInterval(nextImg, 3000)
// previousBtn.addEventListener("click", prevImg)
// nextBtn.addEventListener("click", nextImg)

// let $ = document
// const weightInput = $.querySelector("#weight")
// const heightInput = $.querySelector("#height")
// const weightValue = $.querySelector("#weight-val")
// const heightValue = $.querySelector("#height-val")
// const bmiResult = $.querySelector("#result")
// const categoryElem = $.querySelector("#category")
//
// function bmiCalculator() {
//     let weightInputValue = weightInput.value
//     let heightInputValue = heightInput.value
//
//     weightValue.innerHTML = weightInputValue + " Kg"
//     heightValue.innerHTML = heightInputValue + " Cm"
//
//     let bmiValue = (weightInputValue / (Math.pow(heightInputValue / 100, 2))).toFixed(1)
//
//     bmiResult.innerHTML = bmiValue
//
//     if (bmiValue < 18.5) {
//         categoryElem.innerHTML = "Under Weight"
//         categoryElem.style.cssText = "color:blue"
//         bmiResult.style.cssText = "color:blue"
//     } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
//         categoryElem.innerHTML = "Normal Weight :)"
//         categoryElem.style.cssText = "color:green"
//         bmiResult.style.cssText = "color:green"
//     } else if (bmiValue >= 25 && bmiValue <= 29.9) {
//         categoryElem.innerHTML = "Over Weight"
//         categoryElem.style.cssText = "color:yellow"
//         bmiResult.style.cssText = "color:yellow"
//     } else {
//         categoryElem.innerHTML = "Obese"
//         categoryElem.style.cssText = "color:red"
//         bmiResult.style.cssText = "color:red"
//     }
// }
//
// weightInput.addEventListener("input", bmiCalculator)
// heightInput.addEventListener("input", bmiCalculator)

// var btnElem = document.querySelector("button")
//
// function changeCssVariable() {
//     document.documentElement.style.setProperty("--test-color", "green")
//     console.log(document.documentElement.style.getPropertyValue("--test-color"))
// }
//
// btnElem.addEventListener("click", changeCssVariable)

// const colorBtns = document.querySelectorAll(".btn")
//
// colorBtns.forEach(function (colorsBtn) {
//     colorsBtn.addEventListener("click", function (event) {
//         let btnColor = event.target.dataset.color
//         document.documentElement.style.setProperty("--theme-color", btnColor)
//     })
// })

// const titleElem = document.querySelector(".title")
// document.addEventListener("keyup", function (event) {
//     appendValueToDom(event)
//     let userEventKey = event.key.toUpperCase()
//     let mainKeyElem = document.getElementById(userEventKey)
//     mainKeyElem.classList.add("hit")
//     mainKeyElem.addEventListener("animationend", function () {
//         mainKeyElem.classList.remove("hit")
//     })
// })
//
// function appendValueToDom(event) {
//     if (event.code === "Backspace") {
//         titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
//         return
//     }
//     titleElem.innerHTML += event.key
// }

// let $ = document
// const addBookBtn = $.querySelector('.add-btn')
// const titleInputElem = $.querySelector('#title')
// const authorInputElem = $.querySelector('#author')
// const yearInputElem = $.querySelector('#year')
// const booksContainer = $.querySelector('#book-list')
//
// let books = []
//
// addBookBtn.addEventListener('click', function (event) {
//     event.preventDefault()
//
//     let titleInputValue = titleInputElem.value
//     let authorInputValue = authorInputElem.value
//     let yearInputValue = yearInputElem.value
//
//
//     if (titleInputValue === '' || authorInputValue === '' || yearInputValue === '') {
//         alert('لطفا همه اینپوت ها را پر نمایید')
//     } else {
//         let newBookObject = {
//             id: books.length + 1,
//             title: titleInputValue,
//             author: authorInputValue,
//             year: yearInputValue
//         }
//
//         books.push(newBookObject)
//
//         setIntoLocalStorage(books)
//     }
//
//
// })
//
// function setIntoLocalStorage(allBooksArray) {
//     localStorage.setItem('books', JSON.stringify(allBooksArray))
//     makeEmptyInputs()
//     booksGenerator(allBooksArray)
// }
//
// function makeEmptyInputs() {
//     titleInputElem.value = ''
//     authorInputElem.value = ''
//     yearInputElem.value = ''
// }
//
// function booksGenerator(allBooksArray) {
//
//     booksContainer.innerHTML = ''
//
//     allBooksArray.forEach(function (book) {
//         newBookTrElem = $.createElement('tr')
//
//         let newBookTitleTh = $.createElement('th')
//         newBookTitleTh.innerHTML = book.title
//
//         let newBookAuthorTh = $.createElement('th')
//         newBookAuthorTh.innerHTML = book.author
//
//         let newBookYearTh = $.createElement('th')
//         newBookYearTh.innerHTML = book.year
//
//         newBookTrElem.append(newBookTitleTh, newBookAuthorTh, newBookYearTh)
//
//         booksContainer.append(newBookTrElem)
//
//     })
//
// }
//
//
// function getBooksFromLocalStorage() {
//
//     let localStorageBooks = localStorage.getItem('books')
//
//     if (localStorageBooks) {
//         books = JSON.parse(localStorageBooks)
//         booksGenerator(books)
//     }
// }
//
// window.addEventListener('load', getBooksFromLocalStorage)

// let myTime = new Date()
// console.log(myTime.getFullYear())
// console.log(myTime.getSeconds())
// console.log(myTime.getDate())

// let $ = document
// const hourElem = $.getElementById("hour")
// const minuteElem = $.getElementById("minute")
// const secondsElem = $.getElementById("seconds")
//
//
// setInterval(function () {
//     let myDate = new Date()
//
//     let nowHour = myDate.getHours()
//     let nowMinute = myDate.getMinutes()
//     let nowSecond = myDate.getSeconds()
//
//     hourElem.innerHTML = nowHour
//     minuteElem.innerHTML = nowMinute
//     secondsElem.innerHTML = nowSecond
//
//     if (nowHour < 10) {
//         nowHour = "0" + nowHour
//     }
//
//     if (nowMinute < 10) {
//         nowMinute = "0" + nowMinute
//     }
//
//     if (nowSecond < 10) {
//         nowSecond = "0" + nowSecond
//     }
// }, 1000)

// const dummyText = [
//     'Sweet roll tiramisu sugar plum halvah cupcake topping wafer tootsie roll. Caramels croissant chocolate cake cotton candy. Jelly chocolate cake macaroon brownie pastry gummies cheesecake. Gingerbread pie croissant sugar plum oat cake tart tootsie roll. Chupa chups cake wafer danish. Biscuit donut candy canes gummies candy topping marshmallow jujubes. Chocolate cake cupcake topping. Chupa chups soufflé candy canes pudding brownie gummi bears. Dessert cotton candy jelly oat cake sweet roll cookie macaroon sweet roll. Jelly-o icing halvah.',
//     'Sugar plum gummies cupcake gingerbread sweet. Pastry topping cake candy canes marshmallow caramels chupa chups. Halvah dessert tiramisu brownie lemon drops tootsie roll carrot cake. Cake soufflé oat cake cotton candy. Lollipop cake sweet roll croissant danish. Cake dessert tootsie roll cake liquorice sugar plum biscuit macaroon pie. Bonbon cookie cotton candy bear claw wafer.',
//     'Marshmallow candy canes marshmallow caramels chocolate cake liquorice jelly. Gummies caramels jelly beans chupa chups brownie bonbon. Jujubes jujubes sesame snaps powder. Macaroon sesame snaps muffin cake marzipan topping muffin powder pastry. Macaroon sesame snaps topping. Sweet apple pie jelly tart. Cookie apple pie sweet roll pastry. Cookie chocolate chocolate bar sweet gummies.',
//     'Chocolate sugar plum jelly-o sweet roll gummi bears oat cake powder pastry macaroon. Soufflé cheesecake apple pie jelly beans donut candy canes sweet macaroon. Gingerbread topping dessert bonbon sweet roll oat cake oat cake halvah. Cake chocolate cake chocolate sugar plum candy. Marshmallow brownie sweet dessert croissant chocolate fruitcake sweet donut. Cupcake muffin halvah.',
//     'Cupcake ice cream gummies dessert tiramisu. Cupcake pie cake apple pie jelly-o brownie oat cake soufflé. Candy canes chocolate cake candy canes jelly beans lollipop. Dragée candy canes jujubes pastry cheesecake. Candy canes apple pie powder. Caramels dessert caramels sweet roll danish jelly-o jelly-o powder liquorice. Biscuit pie sugar plum. Oat cake jelly-o marshmallow pastry dragée gummi bears topping. Bear claw ice cream lollipop danish candy jelly-o jelly-o.',
//     'Powder candy fruitcake. Bear claw sweet roll cake lollipop. Apple pie chupa chups cookie soufflé dessert topping gummi bears. Dragée gummi bears candy canes powder chupa chups. Cotton candy dragée lollipop. Sweet roll muffin oat cake marshmallow macaroon sugar plum muffin. Tart chupa chups candy. Fruitcake jujubes halvah marshmallow bonbon marshmallow. Croissant powder cheesecake donut bonbon. Caramels macaroon donut.',
//     'Tiramisu halvah pastry jujubes chocolate bar sugar plum gummies candy. Chocolate chupa chups icing dessert muffin jelly-o oat cake. Powder dessert powder tart tart. Pie powder lemon drops sweet tart icing cake tootsie roll biscuit. Jelly jelly-o sweet roll. Biscuit jelly beans chocolate cake pudding. Sesame snaps wafer apple pie lemon drops cupcake oat cake pie.',
//     'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.',
//     'Powder cake croissant tootsie roll tart lollipop jelly beans. Cake lemon drops wafer muffin biscuit marshmallow brownie. Cotton candy jelly-o cotton candy gummies. Cake sesame snaps macaroon tootsie roll. Pie wafer topping tootsie roll apple pie marzipan sweet. Bonbon tootsie roll candy canes pastry brownie bear claw.',
// ];
//
// let $ = document
// const amountInputElem = $.querySelector("#amount")
// const generateBtnElem = $.querySelector("button")
// const resultElem = $.querySelector("#result")
//
// generateBtnElem.addEventListener("click", function (event) {
//     event.preventDefault()
//
//     let amountElemValue = amountInputElem.value
//     let randomTextIndex = Math.floor(Math.random() * dummyText.length)
//
//     if (amountElemValue < 0 || amountElemValue > 9 || amountElemValue === "" || isNaN(amountElemValue)) {
//         resultElem.innerHTML = dummyText[randomTextIndex]
//     } else {
//         let sliceArray = dummyText.slice(0, amountElemValue)
//
//         let finalTextsArray = sliceArray.map(function (item) {
//             return "<p>" + item + "</p>"
//         }).join("")
//
//         resultElem.innerHTML = finalTextsArray
//     }
// })

// window.addEventListener("resize" , function () {
//     console.log("width: " +window.innerWidth + " - height: " + window.innerHeight)
// })

// const listItems = [
//     {id: 1, name: 'Amin', family: 'Saeedi Rad'},
//     {id: 2, name: 'Amir', family: 'Zehtab'},
//     {id: 3, name: 'Qadir', family: 'Yolme'},
//     {id: 4, name: 'Babak', family: 'Mohammadi'},
//     {id: 5, name: 'Hasan', family: 'Ghahreman Zadeh'},
//
//     {id: 6, name: 'Amin', family: 'Saeedi Rad'},
//     {id: 7, name: 'Amir', family: 'Zehtab'},
//     {id: 8, name: 'Qadir', family: 'Yolme'},
//     {id: 9, name: 'Babak', family: 'Mohammadi'},
//     {id: 10, name: 'Hasan', family: 'Ghahreman Zadeh'},
//
//     {id: 11, name: 'Saeed', family: 'Ehsani'},
//     {id: 12, name: 'Siamak', family: 'Modiri'},
//     {id: 13, name: 'Mohsen', family: 'Ansari'},
//     {id: 14, name: 'Mehran', family: 'Ali Pour'},
//     {id: 15, name: 'Amir Hossein', family: 'Mahtabi'},
//
//     {id: 16, name: 'Hossein', family: 'Amino'},
//     {id: 17, name: 'Melika', family: 'Ehsani'},
//     {id: 18, name: 'Qadir', family: 'Yolme'},
//     {id: 19, name: 'Fatemeh', family: 'Alilou'},
//     {id: 20, name: 'Ehsan', family: 'Tayyebi'},
//
//     {id: 21, name: 'Zahra', family: 'Gholami'},
//     {id: 22, name: 'Matin', family: 'Sahebi'},
//
// ];
//
// let userListContainer = document.querySelector('#list')
// let paginationContainer = document.querySelector('#pagination')
//
// let currentPage = 1
// let rowsCount = 5
//
// function displayUesrsList(allUesrsArray, usersContainer, rowsCount, currentPage) {
//     usersContainer.innerHTML = ''
//
//     let endIndex = rowsCount * currentPage
//     let startIndex = endIndex - rowsCount
//
//     let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)
//
//     paginatedUsers.forEach(function (user) {
//         let userElement = document.createElement('div')
//         userElement.classList.add('item')
//         userElement.innerHTML = user.name + ' ' + user.family
//
//         usersContainer.appendChild(userElement)
//     })
//
// }
//
// function setupPagination(allUesrsArray, pagesContainer, rowsCount) {
//     // Codes
//
//     pagesContainer.innerHTML = ''
//
//     let pageCount = Math.ceil(allUesrsArray.length / rowsCount)
//
//     for (let i = 1; i < pageCount + 1; i++) {
//         let btn = paginationButtonGenerator(i, allUesrsArray)
//         pagesContainer.appendChild(btn)
//     }
//
// }
//
// function paginationButtonGenerator(page, allUsersArray) {
//     let button = document.createElement('button')
//     button.innerHTML = page
//
//     if (page === currentPage) {
//         button.classList.add('active')
//     }
//
//     button.addEventListener("click", function () {
//         currentPage = page
//
//         displayUesrsList(allUsersArray, userListContainer, rowsCount, currentPage)
//
//         let prevPage = document.querySelector("button.active")
//         prevPage.classList.remove("active")
//         button.classList.add("active")
//     })
//
//     return button
// }
//
// displayUesrsList(listItems, userListContainer, rowsCount, currentPage)
// setupPagination(listItems, paginationContainer, rowsCount)

// let allProducts = [
//     {id: 1, title: "Album 1", price: 5, img: "src/images/Album 1.png", count: 1},
//     {id: 2, title: "Album 2", price: 15, img: "src/images/Album 2.png", count: 1},
//     {id: 3, title: "Album 3", price: 20, img: "src/images/Album 3.png", count: 1},
//     {id: 4, title: "Album 4", price: 100, img: "src/images/Album 4.png", count: 1},
//     {id: 5, title: "coffee", price: 5, img: "src/images/Coffee.png", count: 1},
//     {id: 6, title: "shirt", price: 50, img: "src/images/Shirt.png", count: 1}
// ]
//
// let userBasket = []
//
// let $ = document
// const shopItemsContainer = $.querySelector(".shop-items")
// const basketProductsContainer = $.querySelector(".cart-items")
// const removeAllProductsBtn = $.querySelector("#remove-all-products")
// const cartTotalPriceElem = $.querySelector(".cart-total-price")
//
// allProducts.forEach(function (product) {
//     let productContainer = $.createElement("div")
//     productContainer.classList.add("shop-item")
//
//     let productItemSpan = $.createElement("span")
//     productItemSpan.classList.add("shop-item-title")
//     productItemSpan.innerHTML = product.title
//
//     let productImageElem = $.createElement("img")
//     productImageElem.classList.add("shop-item-image")
//     productImageElem.setAttribute("src", product.img)
//
//     let productDetailsContainer = $.createElement("div")
//     productDetailsContainer.classList.add("shop-item-details")
//
//     let productPriceSpan = $.createElement("span")
//     productPriceSpan.innerHTML = product.price
//     productPriceSpan.classList.add("shop-item-price")
//
//     let productAddButton = $.createElement("button")
//     productAddButton.innerHTML = "ADD TO CART"
//     productAddButton.className = "btn btn-primary shop-item-button"
//     productAddButton.addEventListener("click", function () {
//         addProductToBasketArray(product.id)
//     })
//
//     productDetailsContainer.append(productPriceSpan, productAddButton)
//
//     productContainer.append(productItemSpan, productImageElem, productDetailsContainer)
//
//     shopItemsContainer.append(productContainer)
// })
//
// function addProductToBasketArray(productId) {
//     let mainProduct = allProducts.find(function (product) {
//         return product.id === productId
//     })
//     userBasket.push(mainProduct)
//
//     basketProductsGenerator(userBasket)
//
//     calcTotalPrice(userBasket)
// }
//
// function basketProductsGenerator(userBasketArray) {
//     basketProductsContainer.innerHTML = ""
//     userBasketArray.forEach(function (product) {
//         let basketProductContainer = $.createElement("div")
//         basketProductContainer.classList.add("cart-row")
//
//         let basketProductDetailsContainer = $.createElement("div")
//         basketProductDetailsContainer.className = "cart-item cart-column"
//
//         let basketProductImage = $.createElement("img")
//         basketProductImage.setAttribute("src", product.img)
//         basketProductImage.setAttribute("width", "100")
//         basketProductImage.setAttribute("height", "100")
//         basketProductImage.classList.add("cart-item-image")
//
//         let basketProductTitleSpan = $.createElement("span")
//         basketProductTitleSpan.classList.add("cart-item-title")
//         basketProductTitleSpan.innerHTML = product.title
//
//         basketProductDetailsContainer.append(basketProductImage, basketProductTitleSpan)
//
//         let basketProductsPriceSpan = $.createElement("span")
//         basketProductsPriceSpan.className = "cart-price cart-column"
//         basketProductsPriceSpan.innerHTML = product.price
//
//         let basketProductInputsContainer = $.createElement("div")
//         basketProductInputsContainer.className = "cart-quantity cart-column"
//
//         let basketProductInput = $.createElement("input")
//         basketProductInput.className = "cart-quantity cart-column"
//         basketProductInput.value = product.count
//         basketProductInput.setAttribute("type", "number")
//         basketProductInput.addEventListener("change", function () {
//             updateProductCount(product.id, basketProductInput.value)
//         })
//
//         let basketProductRemoveBtn = $.createElement("button")
//         basketProductRemoveBtn.className = "btn btn-danger"
//         basketProductRemoveBtn.innerHTML = "REMOVE"
//         basketProductRemoveBtn.addEventListener("click", function () {
//             removeProductFromBasket(product.id)
//         })
//
//         basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)
//
//         basketProductContainer.append(basketProductDetailsContainer, basketProductsPriceSpan, basketProductInputsContainer)
//
//         basketProductsContainer.append(basketProductContainer)
//
//     })
// }
//
// function removeProductFromBasket(productId) {
//     userBasket = userBasket.filter(function (product) {
//         return product.id !== productId
//     })
//     basketProductsGenerator(userBasket)
// }
//
// removeAllProductsBtn.addEventListener("click", function () {
//     userBasket = []
//     basketProductsGenerator(userBasket)
// })
//
// function calcTotalPrice(userBasketArray) {
//     let totalPriceValue = 0
//
//     userBasketArray.forEach(function (product) {
//         totalPriceValue += product.count * product.price
//     })
//     cartTotalPriceElem.innerHTML = totalPriceValue
// }
//
// function updateProductCount(productId, newCount) {
//     userBasket.forEach(function (product) {
//         if (product.id === productId) {
//             product.count = newCount
//         }
//     })
//     calcTotalPrice(userBasket)
// }

// function mouseDownHandler() {
//     console.log("mouse down")
// }
//
// function mouseUpHandler() {
//     console.log("mouse up")
// }
//
// function mouseEnterHandler() {
//     console.log("mouse enter")
// }
//
// function mouseLeaveHandler() {
//     console.log("mouse leave")
// }
//
// function mouseOverHandler() {
//     console.log("mouse over")
// }
//
// function mouseOutHandler() {
//     console.log("mouse out")
// }
//
// function mouseMoveHandler() {
//     console.log("mouse move")
// }

// let boxElem = document.querySelector(".box")
//
// boxElem.insertAdjacentHTML("afterbegin", "<li>Courses</li>")
// boxElem.insertAdjacentHTML("beforeend", "<li>Courses</li>")
// boxElem.insertAdjacentHTML("beforebegin", "<li>Courses</li>")
// boxElem.insertAdjacentHTML("afterend", "<li>Courses</li>")

// let allProducts = [
//     {id: 1, title: "Album 1", price: 5, img: "src/images/Album 1.png", count: 1},
//     {id: 2, title: "Album 2", price: 15, img: "src/images/Album 2.png", count: 1},
//     {id: 3, title: "Album 3", price: 20, img: "src/images/Album 3.png", count: 1},
//     {id: 4, title: "Album 4", price: 100, img: "src/images/Album 4.png", count: 1},
//     {id: 5, title: "coffee", price: 5, img: "src/images/Coffee.png", count: 1},
//     {id: 6, title: "shirt", price: 50, img: "src/images/Shirt.png", count: 1}
// ]
//
// let userBasket = []
//
// let $ = document
// const shopItemsContainer = $.querySelector(".shop-items")
// const basketProductsContainer = $.querySelector(".cart-items")
// const removeAllProductsBtn = $.querySelector("#remove-all-products")
// const cartTotalPriceElem = $.querySelector(".cart-total-price")
//
// allProducts.forEach(function (product) {
//     shopItemsContainer.insertAdjacentHTML('beforeend', '<div class="shop-item"><span class="shop-item-title">' + product.title + '</span><img class="shop-item-image" src="' + product.img + '"><div class="shop-item-details"><span class="shop-item-price">' + product.price + '</span><button class="btn btn-primary shop-item-button" onclick="addProductToBasketArray(' + product.id + ')">ADD TO CART</button></div></div>')
// })
//
// function addProductToBasketArray(productId) {
//     let mainProduct = allProducts.find(function (product) {
//         return product.id === productId
//     })
//     userBasket.push(mainProduct)
//
//     basketProductsGenerator(userBasket)
//
//     calcTotalPrice(userBasket)
// }
//
// function basketProductsGenerator(userBasketArray) {
//     basketProductsContainer.innerHTML = ""
//     userBasketArray.forEach(function (product) {
//         let basketProductContainer = $.createElement("div")
//         basketProductContainer.classList.add("cart-row")
//
//         let basketProductDetailsContainer = $.createElement("div")
//         basketProductDetailsContainer.className = "cart-item cart-column"
//
//         let basketProductImage = $.createElement("img")
//         basketProductImage.setAttribute("src", product.img)
//         basketProductImage.setAttribute("width", "100")
//         basketProductImage.setAttribute("height", "100")
//         basketProductImage.classList.add("cart-item-image")
//
//         let basketProductTitleSpan = $.createElement("span")
//         basketProductTitleSpan.classList.add("cart-item-title")
//         basketProductTitleSpan.innerHTML = product.title
//
//         basketProductDetailsContainer.append(basketProductImage, basketProductTitleSpan)
//
//         let basketProductsPriceSpan = $.createElement("span")
//         basketProductsPriceSpan.className = "cart-price cart-column"
//         basketProductsPriceSpan.innerHTML = product.price
//
//         let basketProductInputsContainer = $.createElement("div")
//         basketProductInputsContainer.className = "cart-quantity cart-column"
//
//         let basketProductInput = $.createElement("input")
//         basketProductInput.className = "cart-quantity cart-column"
//         basketProductInput.value = product.count
//         basketProductInput.setAttribute("type", "number")
//         basketProductInput.addEventListener("change", function () {
//             updateProductCount(product.id, basketProductInput.value)
//         })
//
//         let basketProductRemoveBtn = $.createElement("button")
//         basketProductRemoveBtn.className = "btn btn-danger"
//         basketProductRemoveBtn.innerHTML = "REMOVE"
//         basketProductRemoveBtn.addEventListener("click", function () {
//             removeProductFromBasket(product.id)
//         })
//
//         basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)
//
//         basketProductContainer.append(basketProductDetailsContainer, basketProductsPriceSpan, basketProductInputsContainer)
//
//         basketProductsContainer.append(basketProductContainer)
//
//     })
// }
//
// function removeProductFromBasket(productId) {
//     userBasket = userBasket.filter(function (product) {
//         return product.id !== productId
//     })
//     basketProductsGenerator(userBasket)
// }
//
// removeAllProductsBtn.addEventListener("click", function () {
//     userBasket = []
//     basketProductsGenerator(userBasket)
// })
//
// function calcTotalPrice(userBasketArray) {
//     let totalPriceValue = 0
//
//     userBasketArray.forEach(function (product) {
//         totalPriceValue += product.count * product.price
//     })
//     cartTotalPriceElem.innerHTML = totalPriceValue
// }
//
// function updateProductCount(productId, newCount) {
//     userBasket.forEach(function (product) {
//         if (product.id === productId) {
//             product.count = newCount
//         }
//     })
//     calcTotalPrice(userBasket)
// }

// let user = {
//     id:1,
//     name: "mohammad",
//     pass: "12345",
//     age: 19
// }
// delete user.age
// console.log(user)
//
// let scores = [10,29,30,5]
// delete scores[2]
// console.log(scores)

// let usersList = document.querySelector("#users")
//
// let usersArray = [
//     "amin" ,
//     "ali" ,
//     "amir" ,
//     "babak" ,
//     "hasan" ,
//     "qadir"
// ]
//
// let newUserLi = null
// let usersFragment = document.createDocumentFragment()
// usersArray.forEach(function (user) {
//     newUserLi = document.createElement("li")
//     newUserLi.innerHTML = user
//
//     usersFragment.append(newUserLi)
// })
//
// usersList.append(usersFragment)

// let allProducts = [
//     {id: 1, title: "Album 1", price: 5, img: "src/images/Album 1.png", count: 1},
//     {id: 2, title: "Album 2", price: 15, img: "src/images/Album 2.png", count: 1},
//     {id: 3, title: "Album 3", price: 20, img: "src/images/Album 3.png", count: 1},
//     {id: 4, title: "Album 4", price: 100, img: "src/images/Album 4.png", count: 1},
//     {id: 5, title: "coffee", price: 5, img: "src/images/Coffee.png", count: 1},
//     {id: 6, title: "shirt", price: 50, img: "src/images/Shirt.png", count: 1}
// ]
//
// let userBasket = []
//
// let $ = document
// const shopItemsContainer = $.querySelector(".shop-items")
// const basketProductsContainer = $.querySelector(".cart-items")
// const removeAllProductsBtn = $.querySelector("#remove-all-products")
// const cartTotalPriceElem = $.querySelector(".cart-total-price")
//
// let productsFragment = $.createDocumentFragment()
//
// allProducts.forEach(function (product) {
//     let productContainer = $.createElement("div")
//     productContainer.classList.add("shop-item")
//
//     let productItemSpan = $.createElement("span")
//     productItemSpan.classList.add("shop-item-title")
//     productItemSpan.innerHTML = product.title
//
//     let productImageElem = $.createElement("img")
//     productImageElem.classList.add("shop-item-image")
//     productImageElem.setAttribute("src", product.img)
//
//     let productDetailsContainer = $.createElement("div")
//     productDetailsContainer.classList.add("shop-item-details")
//
//     let productPriceSpan = $.createElement("span")
//     productPriceSpan.innerHTML = product.price
//     productPriceSpan.classList.add("shop-item-price")
//
//     let productAddButton = $.createElement("button")
//     productAddButton.innerHTML = "ADD TO CART"
//     productAddButton.className = "btn btn-primary shop-item-button"
//     productAddButton.addEventListener("click", function () {
//         addProductToBasketArray(product.id)
//     })
//
//     productDetailsContainer.append(productPriceSpan, productAddButton)
//
//     productContainer.append(productItemSpan, productImageElem, productDetailsContainer)
//
//     productsFragment.append(productContainer)
// })
//
// shopItemsContainer.append(productsFragment)
//
// function addProductToBasketArray(productId) {
//     let mainProduct = allProducts.find(function (product) {
//         return product.id === productId
//     })
//     userBasket.push(mainProduct)
//
//     basketProductsGenerator(userBasket)
//
//     calcTotalPrice(userBasket)
// }
//
// function basketProductsGenerator(userBasketArray) {
//     basketProductsContainer.innerHTML = ""
//     userBasketArray.forEach(function (product) {
//         let basketProductContainer = $.createElement("div")
//         basketProductContainer.classList.add("cart-row")
//
//         let basketProductDetailsContainer = $.createElement("div")
//         basketProductDetailsContainer.className = "cart-item cart-column"
//
//         let basketProductImage = $.createElement("img")
//         basketProductImage.setAttribute("src", product.img)
//         basketProductImage.setAttribute("width", "100")
//         basketProductImage.setAttribute("height", "100")
//         basketProductImage.classList.add("cart-item-image")
//
//         let basketProductTitleSpan = $.createElement("span")
//         basketProductTitleSpan.classList.add("cart-item-title")
//         basketProductTitleSpan.innerHTML = product.title
//
//         basketProductDetailsContainer.append(basketProductImage, basketProductTitleSpan)
//
//         let basketProductsPriceSpan = $.createElement("span")
//         basketProductsPriceSpan.className = "cart-price cart-column"
//         basketProductsPriceSpan.innerHTML = product.price
//
//         let basketProductInputsContainer = $.createElement("div")
//         basketProductInputsContainer.className = "cart-quantity cart-column"
//
//         let basketProductInput = $.createElement("input")
//         basketProductInput.className = "cart-quantity cart-column"
//         basketProductInput.value = product.count
//         basketProductInput.setAttribute("type", "number")
//         basketProductInput.addEventListener("change", function () {
//             updateProductCount(product.id, basketProductInput.value)
//         })
//
//         let basketProductRemoveBtn = $.createElement("button")
//         basketProductRemoveBtn.className = "btn btn-danger"
//         basketProductRemoveBtn.innerHTML = "REMOVE"
//         basketProductRemoveBtn.addEventListener("click", function () {
//             removeProductFromBasket(product.id)
//         })
//
//         basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)
//
//         basketProductContainer.append(basketProductDetailsContainer, basketProductsPriceSpan, basketProductInputsContainer)
//
//         basketProductsContainer.append(basketProductContainer)
//
//     })
// }
//
// function removeProductFromBasket(productId) {
//     userBasket = userBasket.filter(function (product) {
//         return product.id !== productId
//     })
//     basketProductsGenerator(userBasket)
//     calcTotalPrice(userBasket)
// }
//
// removeAllProductsBtn.addEventListener("click", function () {
//     userBasket = []
//     basketProductsGenerator(userBasket)
//     calcTotalPrice(userBasket)
// })
//
// function calcTotalPrice(userBasketArray) {
//     let totalPriceValue = 0
//
//     userBasketArray.forEach(function (product) {
//         totalPriceValue += product.count * product.price
//     })
//     cartTotalPriceElem.innerHTML = totalPriceValue
// }
//
// function updateProductCount(productId, newCount) {
//     userBasket.forEach(function (product) {
//         if (product.id === productId) {
//             product.count = newCount
//         }
//     })
//     calcTotalPrice(userBasket)
// }

// let num1 = 4
// let num2 = 8
//
// console.error("number not defined")
// console.info("number not defined")
// console.warn("number not defined")
// console.assert(num1 > num2 , "big")
//
// let user = {
//     id: 1,
//     username: "mahi",
//     password: "12345",
//     age: 23
// }
//
// let products = [
//     {id: 1, name: "laptop", price: 12000000},
//     {id: 2, name: "mobile", price: 5000000},
//     {id: 3, name: "flash", price: 1000000},
//     {id: 4, name: "memory card", price: 500000},
//     {id: 5, name: "charger", price: 1000000},
// ]
//
// console.table(products)
//
// console.time("for loop")
//
// for (let i = 0; i < 1000; i++) {
//
// }
//
// console.timeEnd("for loop")
//
// console.log("قبل از گروه ابتدا")
//
// console.group("first")
// console.group("second")
// console.group("third")
// console.groupEnd()
//
// console.log("بعد از گروه انتها")
//
// console.log("%cwarning" , "color: blue")

// let divElem = document.querySelector("div")
//
// console.log("client width:" + divElem.clientWidth)
// console.log("client height:" + divElem.clientHeight)

let customScroll = document.getElementById("scroll")

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight
    let scrollPercent = scrollTop / (documentHeight - windowHeight)
    let scrollPercentRounded = Math.round(scrollPercent * 100)
    customScroll.style.width = scrollPercentRounded + "%"
    console.log(scrollPercentRounded)
})



















