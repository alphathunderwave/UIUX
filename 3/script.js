const content = document.querySelector('.content')

for (let index = 0; index < 16*16; index++) {
    const grid = document.createElement('div')
    grid.setAttribute('id',index)
    grid.classList.add('square')
    grid.addEventListener("mouseover", () => {
        document.getElementById(index).classList.add('a')
    })
    content.append(grid)
    
}

const clear = document.createElement('button')
clear.addEventListener('click', () =>{
    document.querySelectorAll('.a').forEach((a) => {
        a.classList.remove('a')
    });
})
clear.textContent = "CLEAR"

document.querySelector('.space').append(clear)