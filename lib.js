selectTheme=()=>{
    
    theme=document.getElementById('btn-select-theme').getAttribute('theme')
console.log(theme)
    // if(btn=="defalt"){
    //     document.getElementById('btn-select-theme').innerHTML="Dark <i class='fa-regular fa-moon'></i>"
    //     document.getElementById('btn-select-theme').setAttribute('theme','Dark')
    // }else if(btn=="Dark"){
    //     document.getElementById('btn-select-theme').innerHTML="Light <i class='fa-regular fa-moon'></i>"
    //     document.getElementById('btn-select-theme').setAttribute('theme','Light')

    // }else if(btn=="Light"){
    //     document.getElementById('btn-select-theme').innerHTML="Light <i class='fa-regular fa-moon'></i>"
    //     document.getElementById('btn-select-theme').setAttribute('theme','Dark')

    // }

    return document.getElementsByTagName('body')[0].classList.toggle('dark')
}


toggleMenu=()=>{

    return document.getElementById('navbarsExample04').classList.toggle('show')
}
 
let whatBtn=document.querySelectorAll('.whats-btn')
let formMsg=document.querySelector('.formMsg')
let leadMsg=document.getElementById('leadMsg')

 

openWhat=()=>{
    return location.href="https://api.whatsapp.com/send/?phone=5511918419084&text=Ol%C3%A1+Harmony+Digital"
}
sendMsg=()=>{ 
    
    return location.href="https://api.whatsapp.com/send/?phone=5511918419084&text=Ol%C3%A1+Harmony+Digital+"+leadMsg.value
}

Array.from(whatBtn).map((el)=>{ 
    
    el.onclick=(e)=>{  
    e.preventDefault() 
 
        if(leadMsg!=undefined){ 
            leadMsg.value.length.length>0?openWhat():sendMsg() 
        }else{
            openWhat()
        }

    }
})
if(formMsg){
    formMsg.addEventListener('submit',(e)=>{
        
        e.preventDefault()  
        console.log(leadMsg.value.length) 

        leadMsg.value.length.length>0?openWhat():sendMsg() 

    })
}