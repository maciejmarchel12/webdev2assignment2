/* Read more and less button */
const showHide = () => {
    let readMoreDiv = document.querySelector("#more")
    if (readMoreDiv.style.display === "block") {
        readMoreDiv.style.display = "none"
        setTimeout(() => readMoreDiv.style.display = 'none', 1000)
        btn.textContent = "Read More"
    } else {
        readMoreDiv.style.display = "block"
        btn.textContent = "Read Less"
        setTimeout(() => readMoreDiv.style.transform = 'scale(1)', 300)
    }
}

let btn = document.querySelector("#btn")
btn.addEventListener('click', showHide, false)

/* handlebar expression */
$(document).ready(function() {
    const homepage={
        'game': "<strong>World of Warcraft</strong>",
        'MDI': "<strong>Mythic Dungeon International</strong>"

    }

    let template = Handlebars.compile($('#paragraph1').html())

    let content = template(homepage)

    $('#paragraph1').html(content)
})

/* custom handlebar */
$(document).ready(function() {
    const casters = [
           {
            "name":"Dan",
            "fullname":"dan anzenberger",
            "image":"images/casters/Dan.png",
           },
           {
            "name":"Peyton",
            "fullname":"peyton tettleton",
            "image":"images/casters/Peyton.png",
           },
           {
            "name":"Alex",
            "fullname":"alex Tatge",
            "image":"images/casters/Alex.png",
           },
           {
            "name":"Tristan",
            "fullname":"tristan killeen",
            "image":"images/casters/Tristan.png",

           },
           {
            "name":"Caroline",
            "fullname":"caroline forer",
            "image":"images/casters/Caroline.png",

           }
          ]
    
    Handlebars.registerHelper('capitalise', function(str) {
      let data=str.split(" ")
      let formattedname=""
      for (word of data) {
         formattedname+= `${word.charAt(0).toUpperCase()}${word.substring(1,).toLowerCase()} `
      }
      return formattedname
    });
    
    
    let template = Handlebars.compile($('#helpers-demo6').html())
    
    let output = template(casters)
    
    $('#placeholder').html(output)
    
    
    $('.ui.card').hide()
    $('.ui.dropdown').dropdown()
    
    $('input[name="user"]').on('change',  () => {
       $('.ui.card').hide()
       caster=($('input[name="user"]').val())
       let result = casters.filter(thecaster => thecaster.name === caster)
       theid = '#'+result[0].name
       $(theid).show()
    })
        
    })