const btnToggle = document.querySelector('.toggle-btn')
console.log(btnToggle)

btnToggle.addEventListener('click',function(){
    //console.log('clicked')
    document.getElementById('sidebar').classList.toggle('active')
})