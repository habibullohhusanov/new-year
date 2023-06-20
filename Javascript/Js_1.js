var a = prompt("Iltimos ismingizni kiriting!!!");
a = ( a.toUpperCase()); //katta xarflarda

var typed = new Typed('.strx', {
	strings: ["Hurmatli " + a + " YANGI YIL bayramingiz muborak bo'lsin!"],
	typeSpeed: 130, //yozish tezligi
	startDelay: 2, //boshlash vaqti
	backSpeed: 3000, //o'chirish tezligi
	backDelay: 1800, //o'chirishni kutish
	loop: true, //yozishni takrorlashni tasdiqlash
	loopCount: Infinity, //yozishni takrorlash
	fadeOut: true, //o'chirish turini tasdiqlash
    fadeOutClass: 'typed-fade-out', //o'chirish turi
	showCursor: true, //kursor turini tasdiqlash
	cursorChar:`<span id="cursor"></span>`, //kursor turi
});