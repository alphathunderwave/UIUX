import "./style.css";

export default function home(content){
    content.innerHTML = ''
    var div = document.createElement('div')
    var h1 = document.createElement('h1')
    h1.textContent = 'FUDS'
    var h2 = document.createElement('h2')
    h2.textContent = 'A JOURNEY IN FOOD-TASTE FROM MOUTH TO TOILET, TRAVELING THE ULTIMATE EXPANSE OF THE GREEKO-JAPO PAN-AMERICAN DINING EXPERIENCES'
    var p = document.createElement('p')
    p.textContent = 'Dear Valued Cutsoner, Thank you for your dining experience. We hope you liked the fud at Fuds. Bye bye! Sincerely Alfredo & Antonio Mizretti Owners, hrak cookers, and busboys of Fuds'
    
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(p)


    content.appendChild(div)

}