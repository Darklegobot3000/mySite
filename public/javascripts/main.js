window.onload = function(){
    var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        }
      })
    app.message = 'hi'

    let contactBtn = document.getElementById('contactBtn')
    contactBtn.addEventListener('click',e=>{
      console.log('clicked button')
      window.scrollTo(0,document.body.scrollHeight || document.documentElement.scrollHeight)

      console.log(contactBtn.innerHTML)
      if (contactBtn.innerHTML==="Contact"){
        contactBtn.innerHTML = 'Back to Top'
      }
      else{
        contactBtn.innerHTML = 'Contact'
      }
    })
}