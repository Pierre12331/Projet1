$('plage').click(function() {
  var $this = $(this);
  $this.addClass('shutterClick');
  setTimeout(function() {
    $this.removeClass('shutterClick');
  }, 900);
});