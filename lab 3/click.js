<script>
  $(() => {

    var $images = $("#d1 > .c1 > a").clone();

    var $length = $images.length;
    var $imgShow = 0;

    $("#d1 > .c1").html($("#d1 > .c1 > a:first"));

    $("#d1 > .c1 > a").click((event) => {

      $(this).children().attr("src",
        $("img", $images).eq(++$imgShow % $length).attr("src"));
      event.preventDefault();

    });
  });
</script>

module default export  