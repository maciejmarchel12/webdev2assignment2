const items = [
    'De other Side +10',
    'Mists of Tirna Scithe +10',
    'Halls of Atonement +15',
    'Sanguine Depths +10',
    'Spires of Acension +15',
    'Necrotic Wake +10',
    'Theatre of Pain +10',
    'Plaguefall +5'
  ];
  
  
  let toDoList = document.querySelector('#ullist')//unordered list
  let btn = document.querySelector('button') // button
  
  const appendNewItem = (item) => {
    let newListItem = document.createElement('li')//creates a new list item
    newListItem.innerHTML = item //sets text of new list item to dream
    toDoList.appendChild(newListItem) //adds list item to the unordered list
  }
  
  items.forEach(currentitem => {
    appendNewItem(currentitem);
  });
  
  btn.addEventListener('click', ()=> {
    let newItem = prompt("Please enter a dungeon and key value","")
    if (newItem) {
       let newElem = document.createElement('li')
       newElem.textContent=newItem
       toDoList.appendChild(newElem)
    }
  })
  
  toDoList.addEventListener('click', evt => {
    if(evt.target.matches('li')) {
       const delItem = evt.target
       toDoList.removeChild(delItem)
    }
  }) 

  /* handlebar */
  $(document).ready(function() {
    const table = [
             {name: "De other side,",
              zone:"Ardenweald",
              key:"+10"
             },
             {name: "Mists of Tirna Scite,",
              zone:"Ardenweald",
              key:"+15"
             },
             {name: "Halls of Atonement,",
              zone:"Ravendreth",
              key:"+12"
             },
             {name: "Sanguine Depths,",
              zone:"Ravendreth",
              key:"+14"
             },
             {name: "Spires of Acension,",
              zone:"Bastion",
              key:"+9"
             },
             {name: "Necrotic Wake,",
              zone:"Bastion",
              key:"+7"
             },
             {name: "Theatre of Pain,",
              zone:"Maldraxxus",
              key:"+11"
             },
             {name: "Plaguefall,",
              zone:"Maldraxxus",
              key:"+5"
             }
    ]
    
    let template   = Handlebars.compile($("#table").html())
    
    let theCompiledHtml = template(table)
    
    $("#content").html(theCompiledHtml)
    
    })