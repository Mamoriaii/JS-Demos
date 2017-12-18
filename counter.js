
var c=0
var t;
var cnt = 0;
function togle(){
	if(!cnt){
		timedCount();
		cnt = 1;
	}else {
		stopCount();
		cnt = 0;
	}
}
function timedCount()
{
	document.getElementById('btn').value="停止计时！";
document.getElementById('txt').value=c
c=c+1
t=setTimeout("timedCount()",1000)
}

function stopCount()
{
c=0;
document.getElementById('btn').value="开始计时！";
setTimeout("document.getElementById('txt').value=0",0);
clearTimeout(t);
}
