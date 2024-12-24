if($(window).width() < 768){
  // $('.faq__category__returnreceive__left__wrap_child').each(function() {
  //   $(this).find
  // }
  // );
  $(".faq__category__returnreceive__left__wrap").each(function(e) {
    if($(this).find('.faq__category__returnreceive__left__wrap_child .faq__category__returnreceive__left__wrap.child').length > 0){
      $(this).addClass('has-children');
    }
});
$('.faq__category__returnreceive__left__wrap.has-children>.faq__category__returnreceive__left__wrap__inner .faq__category__returnreceive__left-link').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('.faq__category__returnreceive__left__wrap').find('.faq__category__returnreceive__left__wrap_child').slideToggle();
});
}

