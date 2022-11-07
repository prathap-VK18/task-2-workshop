$('.add-gif').on('click',function(){

    var gif = $('.gif-link').val();
    if(gif=="")
    ;
    else
    {
        $.ajax({
            url: 'http://localhost:5000/add?gif=' + gif,
            type: 'GET',
            success: function(data) {
              window.location.href = 'http://localhost:5500';
            }
        });

    }
    });
    

    
    $.ajax({
        url: 'http://localhost:5000',
        type: 'GET',
        success:function(data){
            data.forEach(element => {
                let str = 
                `
                <div class="text-center">
                    <div style="background-color: rgb(10, 117, 188); padding: 20px;">
    
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${element.link}" alt="Card image cap">
                            <div class="card-body" style="background-color: rgb(223, 234, 230);">
                                <span>Posted By</span><h5 class="card-title">${element.name}</h5>
                                <p class="card-text">Sample gif of Minion is displayed here</p>
                                    <div><span class="bananas">0</span> Bananas</div>
                                    <br>
                                    <button class="btn btn-outline-warning" id="bananaButton">🍌Banana</button>
                            </div>
                        </div>
    
                    </div>
                </div>
                `
                $('.gifs').append(str)
            });
        }
    })
    
 
    $(document).on('click', '.bananas', function() {
        let count = $(this).text();
          count++;
          $(this).text(count);
      });