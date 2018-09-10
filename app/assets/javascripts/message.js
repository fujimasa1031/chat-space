$(function(){
  // コメント出力関数の定義
  function buildHTML(message){
    var html = `

                `
    return html;
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
    $('.chat-main__message').append(html)
    $('#').val('')
  })
  // エラー処理
  .fail(function(){
    alert('error');
  })
  });
});
