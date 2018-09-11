$(function(){
  // コメント出力関数の定義
function buildHTML(message){
  var img = message.image? `<img src=${message.image}>` : ""
  var html = `<div class="chat-main__message">
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
  //投稿後にページ最下部まで自動スクロールする
  function scrollBottom(){
    $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight},"fast");
  }


  // 送信ボタンクリック時にイベント発火
  $('#new_message').on('submit',function(e){
    e.preventDefault();
  // formDataでフォーム情報取得
    var formData = new FormData(this);
  // 非同期通信でコメント保存
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  // 非同期成功時に定義した関数の実行
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__messages').append(html)
    $('.footer__form--body-message').val("")
    $('.hidden').val('')
  })
  // エラー処理
  .fail(function(){
    alert('送信に失敗しました');
    })
  // 2回目のイベント発火が無効になるのをふせぐ
  .always(function(){
    $(".submit").removeAttr("disabled");
   });
  scrollBottom();
  });
});


