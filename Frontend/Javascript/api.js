function fetchRandomDogImage(){
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function (){
    //     console.log(xhrRequest.response);
    //     var responseJSON =JSON.parse(xhrRequest.response);
    //     var imageUrl = responseJSON.message;
    //     $('#dog-image').attr('src', imageUrl);
    // };
        // xhrRequest.onerror = function(){
        //     console.log("Request Fail")
        // };
    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true);
    // xhrRequest.send();

/*------------------------------------------------------------------*/
        // jquey method 1
    // $.ajax({
    //     url : 'https://dog.ceo/api/breeds/image/random',
    //     method : 'get',
    //     success : function(data){
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src', imageUrl);

    //     }

    // });

/*------------------------------------------------------------------*/

    // jquery Method 2

    $.get('https://dog.ceo/api/breeds/image/random',function(data){
                 var imageUrl = data.message;
                $('#dog-image').attr('src', imageUrl);
    
             })



             
}



$('#fetch-dog-image-button').click(fetchRandomDogImage);