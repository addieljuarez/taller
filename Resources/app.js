// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var ventana = Ti.UI.createWindow({
	title:'ventana 1',
	height:'100%',
	width:'100%',
	backgroundColor:'#000',
	navBarHidden:true,
});


var boton1 = Titanium.UI.createButton({
	title:'web',
	height:'50dp',
	width:'150dp',
	top:'0dp'
});

var boton2 = Titanium.UI.createButton({
	title:'mapa',
	height:'50dp',
	width:'150dp',
	top:'60dp'
});
var boton3 = Titanium.UI.createButton({
	title:'row',
	height:'50dp',
	width:'150dp',
	top:'120dp'
});


var boton4 = Titanium.UI.createButton({
	title:'pendiente',
	height:'50dp',
	width:'150dp',
	top:'180dp'
});

var boton5 = Titanium.UI.createButton({
	title:'pendiente',
	height:'50dp',
	width:'150dp',
	top:'240dp'
});

boton1.addEventListener('click', function(e){
	var ventanaWeb = Ti.UI.createWindow({
		title:'web',
		url:'/ui/web.js',
	});
	ventanaWeb.open({modal:true});
})


ventana.add(boton1);
ventana.add(boton2);
ventana.add(boton3);
ventana.add(boton4);
ventana.add(boton5);

ventana.open();
