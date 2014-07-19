var client = {
      currentUser: null,
      
      login: function(){
          console.log("login");
          var data={};
          data.username = encodeURI($("input[name='username']").val());
          data.pwd = encodeURI($("input[name='userpw']").val());
          $.ajax({
            type: "GET",
            url: "http://localhost:8888/login",
            data: $.param(data),
            contentType: "application/json",
            success: this.loginSuccess,
            error: this.loginFail,
          })
      },
      
      logout: function(){
      
      },
      
      loginSuccess: function(){
        $.mobile.changePage('#mainlogin');
      },
      
      loginFail: function(){
        alert("Wrong username or password");
      },
      
      logout: function(){
      
      },
      
      register: function(){
      
      },
      
      getApt: function(){
      
      },
      
      getAvailableTime: function(){
      
      },
      
      getAvailableDoctor: function(){
      
      },
      
      makeApt: function(){
      
      },
      
      rearrangeApt: function(){
      
      },
      
      cancelApt: function(){
      
      }
}
