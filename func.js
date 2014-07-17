var func = {
  
}

login: function(){
  var info ={};
  info.id = $("input[name='username']").val();
  info.pw = $("input[name='userpw']").val();
  $.ajax({
    type:"GET",
    url:"/login",
    data: $.param(data),
    contentType:"application/json",
    pass: this.onLoginpass,
    fail: this.onLoginfail,
    timeout: 1000
  })
},
onLoginpass: function(info){
  //Need fix
  $.monbile.changPage('#mainPage');
},
onLoginfail: function(info){
  //need fix
},
