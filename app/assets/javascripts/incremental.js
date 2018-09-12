$(function(){

var searchList = $('#user-search-result');

// 検索処理
function appendUser(user){
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name="${user.name}">追加</a>
              </div>
              `
  searchList.append(html);
}



  $("#user-search-field").on("keyup", function(){
    searchList.empty();
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      data: { keyword: input},
      dataType:'json',
      url: "/users"
    })
    .done(function(users) {
      users.forEach(function(user){
        appendUser(user);
      });
    })
    .fail(function(){
      alert("検索は失敗です。。。");
    });




  });
});
