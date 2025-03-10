const calculatorContainer = document.getElementsByClassName('calculator')[0]
const blockWithResults = document.getElementsByClassName('item-show-results')[0]
const deleteAllResults = document.getElementsByClassName('item-AC')[0]


calculatorContainer.addEventListener('click', (event)=> {
   try{
      if( event.target.closest('.calculator__item') && !event.target.closest('.not-for-showing')){
         const pressedNumber = event.target.closest('.calculator__item')
         blockWithResults.innerText = blockWithResults.innerText + pressedNumber.innerText
   
      }
   
   
      if(event.target.closest('.item-DEL')){
         
         blockWithResults.innerText = blockWithResults.innerText.slice(0,-1)
      }
   
      if(event.target.closest('.item-AC')){
         blockWithResults.innerText = ''
      }
   

      if (event.target.closest('.item-GET-RESULTS')){
         const result =  eval(blockWithResults.innerText)
         blockWithResults.innerText = result
      }
   }
   catch(error){
      blockWithResults.innerText = error.message
   }

})