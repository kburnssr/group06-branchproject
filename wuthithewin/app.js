var username;

$('#button').on('click', function(e) {
    e.preventDefault();

    username = $('#username').val();
    $('form-01').append(username);
    console.log(username)
    $('#imageContainer').append(imageContainer)
})

var giphy = [];
var increaseGiphy = 0;

function pushImg(){
      var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=GVyE9PuC3xheBtoUOCyMH3LwGv0lxSBs';
    
      $.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    giphy.push(response.data.images.downsized_medium.url)
    increaseGiphy++;
    
})}

pushImg()