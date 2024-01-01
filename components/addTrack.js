
  export default  function buttonOpen () {
     let opacity = document.querySelector('.opasity')
        let button = document.querySelector('.button-save')
        let modalSave = document.querySelector('.modalSave')
        button.addEventListener('click', ()=>{
            modalSave.classList.add('active')
            opacity.classList.add('active')
            console.log(opacity);
        })
    };
