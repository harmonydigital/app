let whatBtn=document.querySelectorAll('.whats-btn')

// console.log(whatBtn)

Array.from(whatBtn).map((el)=>{
    console.log(el)
    el.onclick=()=>{
        location.href="https://api.whatsapp.com/send/?phone=5511918419084&text=Ol%C3%A1+Harmony+Digital"
    }
})