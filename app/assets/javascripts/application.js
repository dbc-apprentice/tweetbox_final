// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.masonry
//= require jquery.infinitescroll
//= require foundation
//= require foundation/app
//= require_tree .


$(function(){

  var $container = $('#container');

  $container.imagesLoaded(function(){
      $container.masonry({
         itemSelector: '.box',
         columnWidth: 100
       });
     });

  $container.masonry({
       itemSelector : '.box',
      isAnimated: true
   });

  $container.infinitescroll(
    {
      navSelector  : '#page-nav',    // selector for the paged navigation
      nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
      itemSelector : '.box',     // selector for all items you'll retrieve
      animate      : true,
      debug        : true,
      loadingText  : "loading..."
    },

    function( newElements ) {
      var $newElems = $( newElements ).css({ opacity: 0 });
      $newElems.animate({ opacity: 1 });
      $container.masonry( 'appended', $newElems, true );
    }
  );



});

