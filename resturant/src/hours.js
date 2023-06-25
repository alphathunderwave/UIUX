import "./style.css";

export default function hours(content){
    content.innerHTML = ''
    var div = document.createElement('div')
    var h1 = document.createElement('h1')
    h1.textContent = 'HOURS'
    div.appendChild(h1)
    var h2 = document.createElement('h2')
    h2.textContent = ' MONDAY - FRIDAY 5AM - 4AM'
    div.appendChild(h2)
    var h2 = document.createElement('h2')
    h2.textContent = ' SATURDAY 4PM - 4:45PM'
    div.appendChild(h2)
    var h2 = document.createElement('h2')
    h2.textContent = ' SUNDAY CLOSED - 2PM'
    div.appendChild(h2)
    content.appendChild(div)

}