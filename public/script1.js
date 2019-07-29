;(function (){

    'use strict';

   // alert("hi");
    var prefixes         = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var $container       = $('.container');
    var $timeline        = $('.timeline');
    var $timelineItem    = $('.timeline-item');
    var $timelineContent = $('.timeline-content');
    var $dropDown        = $('.dropdown');
    var $hasHovered      = true;
    var hideOnExit       = false;

    // $("document").on('mouseenter', function(e) {
    //     alert("hi");
    // });
    // mouseenter event handler
    $timelineItem.on('mouseenter', function(e) {
       // alert("hi");
      
      var isSelected = $(this).hasClass('selected');
      
      if ( isSelected === false ) {
      
        var leftPos = $(this).position().left,
            left    = leftPos - 88,
            $that   = $(this);
    
        $timelineItem.removeClass('selected');
        $(this).addClass('selected');
    
        if ( $hasHovered === false ) {
          // Show Bounce
    
            // Set Flag
            $hasHovered = true;
    
            // Show DD Bounce
            showBounce(left);
    
            // Show DD content Bounce
            showContentBounce($that);
    
        } else {
          // Follow
    
            // Change pos of DD to follow
            dropDownFollow(left);
    
            // Hide previous dd content
            $timelineContent.removeClass('animated fadeIn bounceIn');
    
            // Show hovered dd content
            $that.find($timelineContent).addClass('animated fadeIn');
        }
      }
      
    });
    
    // mouseleave event handler
    $timeline.on('mouseleave', function(e) {
        //alert("hi");
      if (hideOnExit) {
       
        //   Set Flag
        $hasHovered = false;
    
        // Hide DD
        hideDropDown();
    
        // Hide DD content
        $timelineContent.removeClass('animated fadeIn');
        
      }
      
    });
    
    // Animation end event listener
    $dropDown.on(prefixes, function(e) {
       // alert("hi");
      if ( e.originalEvent.animationName === 'fadeOut' ) {
        $dropDown.removeAttr('style');
      }
      
    });
    
    /**
    * Private functions that do showing/hiding/animating
    */
    function showContentBounce(that) {
        //alert("hi");
      $hasBounced = true;
      that.find('.timeline-content').addClass('animated bounceIn');
    }
    
    function showBounce(pos) {
       // alert("hi");
      $dropDown.css('left', pos + 'px').removeClass('fadeOut').addClass('animated bounceIn');
    }
    
    function dropDownFollow(pos) {
      //  alert("hi");
      $dropDown.css('left', pos + 'px');
    }
    
    function hideDropDown() {
       // alert("hi");
      $timelineItem.removeClass('selected');
      $dropDown.removeClass('bounceIn').addClass('fadeOut');
    }
    }());