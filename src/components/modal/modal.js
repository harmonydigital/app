 




myModal=(event)=>{
    let body=document.querySelectorAll('body')[0] 
    let src=event.target.getAttribute('src')
    let modalImag=document.getElementById('ModalImages')
     

    toggleModal=()=>{
      return modalImag.classList.toggle('show')
    }

    
      modalImag.innerHTML=` 
       
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header"> 
                <button onclick='toggleModal()' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <img class="img-fluid" src="`+src+`" alt="" >
            
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>

          
 
    `
    return toggleModal()
}


 