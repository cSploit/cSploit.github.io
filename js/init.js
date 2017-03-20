(function($){
  $(function(){
    $('.button-collapse').sideNav();
      jQuery("time.timeago").timeago();
          $.ajax({
              url: "https://api.github.com/repos/cSploit/cSploit.github.io/commits/master",
              dataType: "json",
              success: function (data) {
                  let sha = data.sha,
                      date = jQuery.timeago(data.commit.author.date);
                      sha = sha.substring(0,7);
                  $('.github-commit').find('.date').html(date);
                  $('.github-commit').find('.sha').html(sha).attr('href', data.html_url);

              }
          });
  });
})(jQuery);
