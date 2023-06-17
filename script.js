$('#send').on('click', function(){
    $inputValue = $('#input').val();
    $userMsg = `<div class="user-message">
                   <div class="msg">${$inputValue}</div>
                </div>`;
    $('.inbox').append($userMsg);
    $('#input').val('');

    $.ajax({
        url:"message.php",
        type : 'post',
        data : 'text='+$inputValue,

        success: function(result){
            $reply = `<div class="bot-message">
                          <div class="icon">
                             <i class='bx bx-user'></i>
                          </div>
                          <div class="msg">`+result+`</div>
          
                        </div>`;
        $('.inbox').append($reply);
        $('.inbox').scrollTop($('.inbox')[0].scrollHeight);
        }
    })
});