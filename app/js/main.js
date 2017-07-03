$(document).ready(function(){


	var $preloader = $('#p_prldr');

	$('.single-slider').on('init', function(event, slick){
		$('#p_prldr').css('display', 'none');
	});

	$('.single-slider').slick({
		initialSlide: 1,
		dots: true,
		responsive: [
		{
			breakpoint: 768,
			settings:{
				arrows: false
			}
		}
		]
	});

	var slickParams = {
		centerMode: true,
		dots: false,
		centerPadding: '115px',
		slidesToShow: 4,
		responsive: [
		{
			breakpoint: 1180,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1150,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '75px',
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1130,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '70px',
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1110,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '65px',
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1072,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '50px',
				slidesToShow: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '90px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0',
				slidesToShow: 1
			}
		}
		]
	};

	$('.tab-pane').filter('.active').children('.my-slider').slick(slickParams); //init tab slider


	$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
		$('.tab-pane').filter('.active').children('.my-slider').slick('unslick'); //destroy slider cosen tab
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('.tab-pane').filter('.active').children('.my-slider').slick(slickParams); //init slider in new open tab
	});

});