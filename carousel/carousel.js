$(document).ready(function(){
  $(".slide-one").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера
	    autoplayHoverPause:true,
		smartSpeed:2000, //Время движения слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	$(".slide-two").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:20, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		dots:false,
		lazyLoad:true,
		autoplayHoverPause:true,
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});
});