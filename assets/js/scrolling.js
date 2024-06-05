<script>
  $(document).ready(function(){
    $('.nav-link').click(function(event){
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600);
    });
  });
</script>
