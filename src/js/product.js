let $ = document
let backBtn = $.querySelector('#back')
let shoeTitle = $.querySelector("h1")
let shoeDesc = $.querySelector("p")
let shoeImage = $.querySelector("img")
let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get("id")
let productsArray = [
    {
        id: 1,
        title: 'Sport Shoe',
        price: 53,
        img: 'src/images/1.png',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias? (Sport Shoe)"
    },
    {
        id: 2,
        title: 'Women Shoe',
        price: 81,
        img: 'src/images/2.png',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?(Women Shoe)"
    },
    {
        id: 3,
        title: 'Boots',
        price: 34,
        img: 'src/images/3.png',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?(Boots)"
    }
]

let mainProductObject = productsArray.find(function (product) {
    return product.id === Number(mainProductId)
})

if (mainProductObject) {
    shoeTitle.innerHTML = mainProductObject.title

    shoeDesc.innerHTML = mainProductObject.desc

    shoeImage.setAttribute("src", mainProductObject.img)
} else {
    location.href = "file:///E:/my%20project/TestProject/java-script-intermediate/index.html"
}
console.log(mainProductObject)
backBtn.addEventListener('click', function () {
    history.back()
})