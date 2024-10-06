(function(){
    "use strict";
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    function activeService(){
        const accountMenu = $('.account-menu')
        const accountSetting =$$('.account-setting')
        const items = $$('.account-details')
        accountMenu.addEventListener('click', (e)=>{
          if(e.target != accountMenu){
            accountSetting.forEach(setting => {
              if(setting!= e.target){
                setting.classList.remove('active')
              }else
                setting.classList.add('active')
            }) 
          }
         
          for (let index = 0; index < accountSetting.length; index++) {
            if(e.target != accountMenu){
              const element = items[index];
              if(accountSetting[index] == e.target){
                element.classList.remove('d-none')
              }else element.classList.add('d-none')
            }
          }
        })
    }
    window.addEventListener('load', activeService);
  
})();