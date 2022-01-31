function pesquisar() {
  const api_key = "sBE2O2V210iiVSgtwi0OKBBeld98sF8opOxRpQeV";
  const data = $("#data").val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${data}`,
    success: function(data){
      apiData(data);
      $(".alert").html("");
    },
    
  })

  function apiData(pesquisar) {
    const midia = $(".midia");
    const title = $(".titulo");
    const autor = $(".autor");
    const expli = $(".expli");

    title.html(pesquisar.title);
    expli.html(`<h3>Explanation:</h3> ${pesquisar.explanation}`);
    autor.html(` ${pesquisar.copyright}`);

    if (pesquisar.copyright !== undefined) {
      autor.text(`Copyright © ${pesquisar.copyright}`);
    } else {
      autor.text('No author');
    }

    if (pesquisar.media_type == 'image') {
      midia.html(`<img class="img" src="${pesquisar.url}" width="98%" />`)
    } else {
      midia.html(`<iframe width="98%" height="350px" class="img" src="${pesquisar.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
}