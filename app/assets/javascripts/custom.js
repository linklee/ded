$(function(){
	$('.one > img').click(function(){$this=$(this);src=$this.attr('src');$('#mainImgGallery').attr('src',src)})
});
