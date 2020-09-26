$(function(){
    $('#ghsubmitbtn').on('click', function(e){
      e.preventDefault();
      $('#ghapidata').html('<div id="loader"><img src="https://i.imgur.com/UqLN6nl.gif" alt="loading..."></div>');
      
      var username = $('#ghusername').val();
      var requri   = 'https://api.github.com/users/'+username;
      var repouri  = 'https://api.github.com/users/'+username+'/repos';
      
      requestJSON(requri, function(json) {
        if(json.message == "Not Found" || username == '') {
          $('#ghapidata').html("<h2>No User Info Found</h2>");
        }
        