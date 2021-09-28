{/* <button id="change-h1" class="btn btn-primary">Change H1 Text</button>
<button id="change-bgc" class="btn btn-primary">Change Background Colour</button>
<button id="change-address" class="btn btn-primary">Change Footer Address</button>
<button id="add-links-class" class="btn btn-primary">Add CSS Class To Amazon Links</button>
<button id="toggle-img" class="btn btn-primary">Show / Hide Images</button>
<button id="price-colour" class="btn btn-primary">Change Price Colour Randomly</button> */}

let changeHeader = document.getElementById('change-h1')
let changeBgc = document.getElementById('change-bgc')
let changeAddress = document.getElementById('change-address')
let addLinkClass = document.getElementById('add-links-class')
let toggleImgs = document.getElementById('toggle-img')
let priceColour = document.getElementById('price-colour')

let header = document.getElementsByTagName('h1')[0]
let body = document.getElementsByTagName('body')[0]
let address = document.getElementsByTagName('address')[0]
let links = document.getElementsByTagName('a')
let images = document.getElementsByTagName('img')
let prices = document.getElementsByClassName('product-price')

changeHeader.onclick = () => {
    header.innerText = 'You Changed The H1'
}

changeBgc.onclick = () => {
    body.style.backgroundColor = 'lightgreen'
}

changeAddress.onclick = () => {
    address.innerText = 'This Is A Fake Address'
}

addLinkClass.onclick = () => {
    for (let link of links) {
        link.classList.add('random-class')
    }
}

toggleImgs.onclick = () => {
    for (let img of images) {
        img.classList.toggle('toggling-image')
    }
}

let btnclicks = 0
priceColour.onclick = () => {
    let colours = ['red', 'blue', 'green', 'yellow', 'orange', 'grey']
    for (let i = 0; i < prices.length; i++) {
        prices[i].style.color = colours[btnclicks]
    }
    btnclicks++
}