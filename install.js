const btnInstall = document.querySelector('.install')

let deferredPrompt
window.addEventListener("beforeinstallprompt", (e)=> {
   e.preventDefault()
   deferredPrompt = e
   btnInstall.classList.remove('hidden')
})

btnInstall.addEventListener("click", (e)=>{
   e.preventDefault()
   btnInstall.classList.add('hidden')
   deferredPrompt.prompt()

   deferredPrompt.userChoice.then((choiceResult)=>{
      if (choiceResult.outcome === 'accepted'){
         console,log("installation accpeted")
      } else{
         console.log("installation non accepted")}
         deferredPrompt = null
      
   })
})