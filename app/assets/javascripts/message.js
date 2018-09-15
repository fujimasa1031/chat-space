$(function(){

  function buildHTML(message){
    var img = message.image? `<img src=${message.image}>` : ""
    var html = `<div class="chat-main__message" data-message-id="${message.id}">
                  <div class="chat-main__message-name">
                    ${message.user_name}
                  </div>
                  <div class="chat-main__message-time">
                    ${message.created_at}
                  </div>
                  <div class="chat-main__message-text">
                    ${ message.text }
                  <div>
                   <div class="chat-main__message-image">
                    ${ img }
                  </div>
                </div>`
    return html;
  }

  function scrollBottom(){
    $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight},"fast");
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__messages').append(html)
    $('.footer__form--body-message').val("")
    $(".submit").removeAttr("disabled")
    $('.hidden').val('')
  })
  .fail(function(){
    alert('送信に失敗しました');
    });

  scrollBottom();
  });
  // 最初に書いたコード
  // var interval = setInterval(function() {
  //   var id = $('.chat-main__message:last').data('message-id');
  //   if (window.location.href.match(/\/groups\/\d+\/messages/)) {
  //   $.ajax({
  //     url: location.href.json,
  //     dataType: 'json'
  //   })
  //   .done(function(json) {
  //     var id = $('.chat-main__message:last').data('message-id');
  //      json.messages.forEach(function(message){
  //       if (message.id > id ) {
  //         var newHTML = buildHTML(message);
  //         $('.chat-main__messages').append(newHTML);
  //         scrollBottom();
  //       }
  //     });
  //   })
  //   .fail(function(json) {
  //     alert('自動更新に失敗しました');
  //   });
  // } else {
  //   clearInterval(interval);
  //  }} , 5000 );

  // $(function(){
  //   setInterval(update, 2500);
  // });
  // function update(){
  //   if($('.chat-main__message')[0]){
  //     var lastId = $('.chat-main__message:last').data('message-id');
  //   }else{
  //     var lastId = 0
  //   }
  //   $.ajax({
  //     url: location.href,
  //     data: {message: {id: lastId}},
  //     dataType: 'json'
  //   })
  //   .always(function(data){
  //     $.each(data,function(i,data){
  //       var newHTML = buildHTML(data);
  //       $('.chat-main__messages').append(newHTML);
  //       scrollBottom();
  //     });
  //   });
  // }

var update = setInterval(function() {
    if($('.chat-main__message')[0]){
      var lastId = $('.chat-main__message:last').data('message-id');
      $.ajax({
      url: location.href,
      data: {message: {id: lastId}},
      dataType: 'json'
    })
    .done(function(data){
      $.each(data,function(i,data){
        var newHTML = buildHTML(data);
        $('.chat-main__messages').append(newHTML);
        scrollBottom();
      });
    });
  }else{
      var lastId = 0
      clearInterval(update);
    }
  }, 2500 );
});
