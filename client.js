currentUser = null;
      
      function login(){
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
      }
      
      function logout(){
      
      }
      
      function loginSuccess(){
        $.mobile.changePage('#mainlogin');
      }
      
      function loginFail(){
        alert("Wrong username or password");
      }
      
      function logout(){
      
      }
      
      function register(){
            console.log("register");
            var data={};
            data.username = encodeURI($("input[name='username']").val());
            data.pwd = encodeURI($("input[name='pw']").val());
            data.cpwd = encodeURI($("input[name='cpw']").val());
            data.email = encodeURI($("input[name='email']").val());
            $.ajax({
                  type: "GET",
                  url: "http://localhost:8888/register",
                  data: $.param(data),
                  contentType: "application/json",
                  success: this.regSuccess,
                  error: this.regFail,
            })
      }
      
      function regSuccess(){
        $.mobile.changePage('#mainlogin');
      }
      
      function regFail(){
        alert("Username or email has been used already");
      }
      
      
      function getApt(){
      
      }
      
      function getAvailableTime(){
      
      }
      
      function getAvailableDoctor(){
      
      }
      
      function makeApt(){
      
      }
      
      function rearrangeApt(){
      
      }
      
      function cancelApt(){
      
      }

