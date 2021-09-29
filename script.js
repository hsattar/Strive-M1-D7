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

const sendMsgWithEnter = (input, btn) => {
    input.onkeyup = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            btn.click()
        }
    }
}

sendMsgWithEnter(messageInput, send)

send.onclick = () => {
    let newMsg = document.createElement('p')
    newMsg.innerText = messageInput.value
    let msgRow = document.createElement('div')
    msgRow.classList.add('messages-row')
    msgArea.appendChild(msgRow)
    msgRow.appendChild(newMsg)
    let deleteBtn = document.createElement('i')
    deleteBtn.classList.add('bi')
    deleteBtn.classList.add('bi-trash')
    deleteBtn.classList.add('btn')
    deleteBtn.classList.add('btn-danger')
    msgRow.appendChild(deleteBtn)
    messageInput.value = ''
    messageInput.focus()
    deleteBtn.addEventListener('click', (event) => {
        msgContainer = event.target.parentNode
        msgContainer.remove()
    })
    newMsg.addEventListener('click', (event) => {
        let editMsg = event.target
        let editMsgRow = editMsg.parentNode
        editMsgRow.innerHTML = 
        `<input class="changing-input" type="text" value="${editMsg.innerText}">
        <i class="bi bi-check btn btn-success"></i>`
        let changingMsg = document.getElementsByClassName('changing-input')[0]
        changingMsg.focus()
        let saveBtn = document.getElementsByClassName('bi-check')[0]
        sendMsgWithEnter(changingMsg, saveBtn)
        saveBtn.addEventListener('click', (e) => {
            let newMsgValue = changingMsg.value
            let saveEdit = e.target.parentNode
            saveEdit.innerHTML = 
            `<p>${newMsgValue}</p>
            <i class="btn btn-danger bi bi-trash"></i>`
        })
    }) 
}

// const sendMsg = () => {
//     let messageInput = document.getElementById('message-box')
//     let msgArea = document.getElementById('message-area')
//     msgRow = 
//     `<div class="messages-row">
//     <p>${messageInput.value}</p>
//     <i class="btn btn-danger bi bi-trash"></i>
//     </div>`
//     msgArea.innerHTML += msgRow
//     messageInput.value = ''
//     messageInput.focus()
// }

// let send = document.getElementById('send-btn')
// send.addEventListener('click', sendMsg)

// let deleteBtn = document.getElementsByClassName('bi-trash')[0]
// for (btn of deleteBtn) {
//     btn.addEventListener('click', deleteMsg)
// }

// const deleteMsg = event => {
//     let buttonClicked = event.target
//     buttonClicked.parentNode.remove()
// }