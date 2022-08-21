const form = document.querySelector('#contact')
form.addEventListener('submit', evt => {
  evt.preventDefault()
  let params = `width=600,height=300,left=10,top=10`;
  myWindow = window.open("", "", params)

  myWindow.document.write("Thank you "+ form.elements.contactname.value + " for contacting us")
  myWindow.document.write("<br>We will contact you by email "+ form.elements.emailaddress.value)
  if (form.elements.TandC.checked) {	  
     myWindow.document.write("<br>You are happy to have your info and question entered and sent to relevant members and participants of the MDI")
  }
   else myWindow.document.write("<br>We will strictly use your info within this website only")


})