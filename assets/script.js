const box = document.getElementById('container')
const btn = document.querySelector('button')
box.addEventListener('mousemove',function(e){
    const rec = box.getBoundingClientRect()
    const x = e.clientX - rec.left
    const y = e.clientY - rec.top
    box.style.setProperty('--x',`${x}px`)
    box.style.setProperty('--y',`${y}px`)
})
btn.addEventListener('click',function(){
    if(btn.innerText=='Auto'){
        btn.innerText = 'Follow Mouse'
        box.classList.remove('auto')
        box.classList.add('mouse')
    }else{
        btn.innerText = 'Auto'
        box.classList.remove('mouse')
        box.classList.add('auto')  
    }
})