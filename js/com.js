

window.onload = function ( ) {

  alert ( 'test' ) ;

};

var i = 0 ;

setInterval ( function ( ) {

    document.title = ( i ) ? "HELLO!" : "I'm Aleks" ; 
  
    if ( i ) {
      i = 0 ;
    } else {
      i = 1 ;
    }

} , 1000 ) ;
