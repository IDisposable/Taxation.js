; (function (base, $) {
	base.$ = $;
	var compounding = document.createElement('script');
	compounding.setAttribute('type','text/javascript');
	compounding.setAttribute('src','Taxation.js');
	document.head.appendChild(compounding);
}(window));
