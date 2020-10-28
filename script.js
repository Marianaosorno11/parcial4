var bnda=function()
{
	var b=document.getElementById("b");
	var boton=document.getElementById("boton");
	var ini=document.getElementById("ini");
	ini.autoplay=true;
	ini.load();
	boton="botoni";
	b.className="ab";
	if (b.className=="ab")
	{
		setTimeout(pag2,5000);
	}
}

var pag2=function() 
{
	window.location.href='pag2.html';
}

var ac1=function()
{
	var a1=document.getElementById("a1");
	var s1=document.getElementById("s1");
	var v1=document.getElementById("v1");
	v1.className="v1i";
	s1.autoplay=true;
	s1.load();
	a1.className="aa1";
	if (a1.className=="aa1")
	{
		setTimeout(stop1,2000);
	}
}

var ac2=function()
{
	var a2=document.getElementById("a2");
	var s2=document.getElementById("s2");
	var v2=document.getElementById("v2");
	v2.className="v2i";
	s2.autoplay=true;
	s2.load();
	a2.className="aa2";
	if (a2.className=="aa2")
	{
		setTimeout(stop2,1000);
	}
}

var ac3=function()
{
	var a3=document.getElementById("a3");
	var s3=document.getElementById("s3");
	var v3=document.getElementById("v3");
	v3.className="v3i";
	s3.autoplay=true;
	s3.load();
	a3.className="aa3";
	if (a3.className=="aa3")
	{
		setTimeout(stop3,1700);
	}
}

var stop1=function()
{
	var a1=document.getElementById("a1");
	a1.className="a1q";
}

var stop2=function()
{
	var a2=document.getElementById("a2");
	a2.className="a2q";
}

var stop3=function()
{
	var a3=document.getElementById("a3");
	a3.className="a3q";
}