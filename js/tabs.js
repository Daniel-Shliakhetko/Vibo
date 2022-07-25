$(".stable-card").click(function () {
  console.log("Click");
  $(".stable-card").removeClass("active");
  $(this).addClass("active");
});
// $(document).click(function (event) {
//   if (!$(event.target).is(".stable-card, .stable-card *, .stable-card * *")) {
//     $(".stable-card").removeClass("active");
//   }
// });
