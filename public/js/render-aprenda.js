$(document).ready(function() {
	
	
    const sheetID = "1pQS2-OkWRpOeeaAfQsx3EmuhoZ3H-13a9qSSkhDUDgY"
    const url = "https://docs.google.com/spreadsheets/d/"
    const query1 = `/gviz/tq?gid=215134644`
    
    const endpoint1 = `${url}${sheetID}${query1}`;
    
    console.log(endpoint1);
    
    fetch(endpoint1)
    .then(response => response.text())
    .then(data => {
    
        //console.log(data);
        const temp = data.substring(47).slice(0,-2);
        //console.log(temp);
        const json = JSON.parse(temp);
        //console.log(json);
        const rows = json.table.rows;
        console.log(rows);

        var carouselAprenda = document.getElementById('swiper-wrapper-aprenda');
        carouselAprenda.innerHTML = "";

        rows.forEach(row => {
            
            carouselAprenda.innerHTML = carouselAprenda.innerHTML + `        
        <div class="swiper-slide">
                      <div class="card">
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img src="${row.c[6].v}" alt="Placeholder image">
                          </figure>
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-4">Titulo da Notícia</p>
                            </div>
                          </div>
                      
                          <div class="content">${row.c[4].v}
                            <br>
                            <time datetime="2016-1-1">${row.c[5].v}</time>
                          </div>
                        </div>
                      </div>
                    </div>
        
        `


        });

     });
    
    
    });