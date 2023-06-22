import "./style.css";

export default function home(content){
    var div = document.createElement('div')
    div.textContent = 'home'
    content.appendChild(div)

}