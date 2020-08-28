window.onscroll = function() {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 100% || document.documentElement.scrollTop > 100%) {
        document.getElementById("btn-fill").style.top = "0";
      } 
      else {
        document.getElementById("btn-fill").style.top = "-75px";
      }
    }
