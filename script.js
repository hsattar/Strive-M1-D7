let changeHeader = document.getElementById('change-h1')
changeHeader.onclick = () => {
    let header = document.getElementsByTagName('h1')[0]
    header.innerText = 'You Changed The H1'
}

let changeBgc = document.getElementById('change-bgc')
changeBgc.onclick = () => {
    let body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = 'lightgreen'
}

let changeAddress = document.getElementById('change-address')
changeAddress.onclick = () => {
    let address = document.getElementsByTagName('address')[0]
    address.innerText = 'This Is A Fake Address'
}

let addLinkClass = document.getElementById('add-links-class')
addLinkClass.onclick = () => {
    let links = document.getElementsByTagName('a')
    for (let link of links) {
        link.classList.add('links-class')
    }
}

let toggleImgs = document.getElementById('toggle-img')
toggleImgs.onclick = () => {
    let images = document.getElementsByTagName('img')
    for (let img of images) {
        img.classList.toggle('toggling-image')
    }
}

let priceColour = document.getElementById('price-colour')
let btnclicks = 0
let prices = document.getElementsByClassName('product-price')
priceColour.onclick = () => {
    let colours = ['red', 'blue', 'green', 'yellow', 'orange', 'grey']
    for (let i = 0; i < prices.length; i++) {
        prices[i].style.color = colours[btnclicks]
    }
    btnclicks++
}

let msgArea = document.getElementById('message-area')
let messageInput = document.getElementById('message-box')
let send = document.getElementById('send-btn')

messageInput.onkeyup = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
        send.click()
    }
}

send.onclick = () => {
    let newMsg = document.createElement('p')
    newMsg.innerText = messageInput.value
    msgArea.appendChild(newMsg)
    messageInput.value = ''
    messageInput.focus()
}