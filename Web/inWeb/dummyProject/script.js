document.getElementById("to-do-list") // returns one or null element
document.getElementsByClassName("to-do-item")
document.getElementsByTagName("li")

// 3:23 HTML Collection

document.querySelector(".title") // returns first thing it finds
document.querySelectorAll("li")
document.querySelectorAll("main *")

document.nodeName
document.nodeType
document.childNodes
document.children // returns elements

document.getElementById("to-do-list").parentElement
document.getElementById("to-do-list").parentNode
document.documentElement // html doc

// 3:45

document.getElementById("to-do-list").getElementsByTagName("li")
// Object.innertext

document.title
document.scripts
document.cookie
document.documentElement
document.head
document.body
document.forms
document.images
document.lastModified
document.activeElement 
document.links
document.characterSet
document.readyState // load complete or not


let att = document.createAttribute("target")
att.value = "_blank"
document.getElementById("ref-link").setAttributeNode(att)
// or
document.getElementById("ref-link").setAttribute('target', '_black')

let newLi = document.createElement('li')
let liText = document.createTextNode("dummy item 5")
newLi.appendChild(liText)
// or
newLi.innerText = "new one"

document.open() // auto happen
document.write("hello world")
document.close()

// 4:26




























