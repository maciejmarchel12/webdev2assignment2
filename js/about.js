document.querySelector(".first").addEventListener("click", function() {
    swal('Any fool can use a computer')
  })

document.querySelector(".second").addEventListener("click", function() {
    swal({
        icon: 'success',
        title: 'Your work has been saved',
        confirmbutton: false,
        timer: 1500
      })
})

document.querySelector(".third").addEventListener("click", function() {
    swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        icon: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

document.querySelector(".fourth").addEventListener("click", function() {
    swal({
        text: 'Search for a movie. e.g. "La La Land".',
        content: "input",
        button: {
          text: "Search!",
          closeModal: false,
        },
      })
      .then(name => {
        if (!name) throw null;
       
        return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
      })
      .then(results => {
        return results.json();
      })
      .then(json => {
        const movie = json.results[0];
       
        if (!movie) {
          return swal("No movie was found!");
        }
       
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
       
        swal({
          title: "Top result:",
          text: name,
          icon: imageURL,
        });
      })
      .catch(err => {
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
})

