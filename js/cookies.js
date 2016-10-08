

//создание cookie
  function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
  {
   var cookie_string = name + "=" + escape ( value );

   if ( exp_y )
   {
     var expires = new Date ( exp_y, exp_m, exp_d );
     cookie_string += "; expires=" + expires.toGMTString();
   }

   if ( path )
         cookie_string += "; path=" + escape ( path );

   if ( domain )
         cookie_string += "; domain=" + escape ( domain );

   if ( secure )
         cookie_string += "; secure";

   document.cookie = cookie_string;
  }
  // функция установки значения баланса
   function SetScore(param){
    set_cookie ( "total", param, 2038, 01, 15, "",
                 "casino" );

  }
  //получение cookies
  function get_cookie ( cookie_name )
  {
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

    if ( results )
      return ( unescape ( results[2] ) );
    else
      return null;
  }
  function DelScore(){
    set_cookie ( "total", "555", 1970, 01, 15, "",
                 "casino" );
  }
