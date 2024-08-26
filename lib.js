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