import "./style.css";

export default function home(){
    const content = document.querySelector(".content")
    var div = document.createElement('div')
    div.textContent = 'home'
    content.appendChild(div)

}