$(document).ready(function(){
	const typed = new Typed('#typingNow', {
		strings: [
				'I am student .',
				'I Love Design .',
				'I am Web Designer and Developer .',
				'I am from Bangladesh ....'
				],
				typeSpeed: 50,
				startDelay: 2,
				backSpeed: 50,
				backDelay:1500,
				loop:true,
				smartBackspace: true,
		});
		window.addEventListener("scroll",function(){
			let header=document.querySelector('#sticker');
			header.classList.toggle("addNavBg",window.scrollY >500,501 )
		});
		$(".owl-carousel").owlCarousel({
			margin:20,
			items:3,
			loop:true,
			autoplayHoverPause:true,
			autoplay:true,
			autoplayTimeout:3000,
			responseresponsiveRefreshRate:true,
			responsive:{
				0:{
					items:1,
				},
				575.98:{
					items:1,
				},
				767.98:{
					items:2,
				},
				991.98:{
					items:3
				},
				1199.98:{
					items:4,
				},
				1919.98:{
					items:4,
				}
			}
		});		
		$(function(){
			$('.rashid').circlechart({
				fill: {gradient: ['#ff1e41', '#ff5f43']},
				delay: 50,
			});
		});
		$('.counter').counterUp({
			delay: 50,
			time: 3000,
		});
		AOS.init({
			useClassNames: true,
			offset: 220,
			duration: 1800,
			once: false,     
			mirror:false,
			anchorPlacement: 'top-bottom',
		});
});


// javascript texr


function myfun(){
	let text=document.querySelectorAll('#demo');
	console.log('hellow');
}