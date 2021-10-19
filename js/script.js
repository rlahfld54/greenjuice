$(document).ready(function () {
  //안내창
  let modal = $(".modal");
  let modal_con = $(".modal-con");
  let modal_close = $(".madal-close");

  modal.click(function () {
    $(this).fadeOut();
  });

  modal_close.click(function () {
    $(this).hide();
    console.log("닫기버튼");
  });
});
