import "./style.css";

export default function menu(){
    const content = document.querySelector(".content")
    var div = document.createElement('div')
    div.textContent = 'menu'
    content.appendChild(div)

}