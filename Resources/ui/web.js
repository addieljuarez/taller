var ventana2 = Ti.UI.currentWindow;
ventana2.backgroundColor = '#00000'
var webView = Titanium.UI.createWebView({
	url:'https://www.google.com.mx',
	top:'30dp',
});

ventana2.add(webView);
