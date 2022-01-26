function buscar() {
  const api_key = "sBE2O2V210iiVSgtwi0OKBBeld98sF8opOxRpQeV";
  const data = $("#data").val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${data}`,
    success: function(data){
      apiData(data);
      $(".alert").html("");
    },
    
  })

  function apiData(busca) {
    const img   = $(".img");
    const title = $(".titulo");
    const expli = $(".expli");

    title.html(busca.title);
    expli.html(`<h3>Explanation:</h3> ${busca.explanation}`);

    if (busca.media_type == 'image') {
      img.html(`<img class="img" src="${busca.url}" width="98%" />`)
    } else {
      img.html(`<iframe width="98%" height="350px" class="img" src="${busca.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
}