function main(name){
						this.name=name;
						this.jz=jz;
						function jz(){
							new Image().src="http://pvz4.lonelystar.org/images/interface/background1.jpg"
							new Image().src="http://pvz4.lonelystar.org/images/Zombies/Zombie/1.gif"
						}
					} 
function setlevel(level,zz){
	this.level = level;
	this.zz =zz;	
}
function zombieqk(name,imgF,x,y,x2,y2){
	this.name=name;
	this.imgF=imgF;
	this.x=x;
	this.y=y;
	this.x2=x2;
	this.y2=y2;
	this.setimg =setimg;
	function setimg(){
		if(this.name == "zombie"){
			mx=this.x2-this.x;
			my=this.y2-this.y;
			sx = mx.toString();
			sy = my.toString();
			img = appenddom("img",this.imgF);
			setnewarrt("src","http://pvz4.lonelystar.org/images/Zombies/Zombie/1.gif",img);
			setnewarrt("style","position: relative;"+"left:"+sx+"px;"+"top: "+sy+"px;",img);
			
		}
	}
	
}
function levelbackground(elem,qk,qkx){
	this.elem=elem;
	this.qk=qk;
	this.yd = yd;
	function yd(){
		setnewarrt("style","",this.elem);
		lastx=0;
		leg=50;
		lastqkx=1000;
		for(i=400;i>=0;i--){
			setTimeout(function(){
			myx=lastx-1 ;
			myqkx = lastqkx-1;
			sx =myx.toString();
			sqkx =myqkx.toString();
			setarrt("style","position: relative;"+"left:"+sx+"px;",elem);
			setarrt("style","width:300px;height:544px;position: relative;left:"+sqkx+"px;bottom: 544px;",qk);
			lastqkx--;
			lastx--;
			},leg)
			leg+=5;
		}
		leg=50;
		setTimeout(function(){
			for(i=400;i>=0;i--){
			setTimeout(function(){
			myx=lastx+1;
			myqkx = lastqkx+1;
			sx =myx.toString();
			sqkx =myqkx.toString();
			setarrt("style","position: relative;"+"left:"+sx+"px;",elem);
			setarrt("style","width:300px;height:544px;position: relative;left:"+sqkx+"px;bottom: 544px;",qk);
			lastqkx++;
			lastx++;
			},leg)
			leg+=5;
		}
		},3000)
			
	
	}
}
function kc(name,main){
	this.name = name;
	this.main = main;
	this.kcxs = kcxs;
	function kcxs(){
		var elem = document.getElementById("kc");
		var imgf = appenddom("div",elem);
		var img = appenddom("img",imgf);
		setnewarrt("src","http://pvz4.lonelystar.org/images/Card/Plants/Peashooter.png",img);
		//plantshadow8.png
		setnewarrt("style","width:100px;height:58px;overflow:hidden;",imgf);
		imgf.onclick = function(){
			zzzw1=new zzzw(this.pvz);
			zzzw1.xy();
		}
	}
	
	
}
function zzzw(main){
	this.main = main;
	this.xy=xy;
	function xy(){
	
	var level=document.getElementById("level");
	var img = appenddom("img",level);
	setnewarrt("src","http://pvz4.lonelystar.org/images/Plants/Peashooter/0.gif",img);
	setnewarrt("style","float:bottom;position: relative;left:0px;",img);
	document.body. onmousemove= function(){
		var x=event.clientX;
		var y=event.clientY;
		img.style.top = (y-1260).toString()+"px";
		img.style.left =(x-650).toString()+"px";
		//img.style.bottom = ((1260-y)*(document.body.clientWidth/1980)).toString()+"px";
		//img.style.left =	((x-20-(755-170))*(document.body.clientWidth/1980)).toString()+"px";
	}
	img.onclick = function(){
		var img2 = appenddom("img",level);
		//plantshadow8.png
		var img3 = appenddom("img",level);
		var x=event.clientX;
		var y=event.clientY;
		//225 71
		for(i = 755; i<=755+88*9;i+=88){
		for(j = 96; j<=96+83*5;j+=85){
			if(x>=i && x<=i+85 && y>=j && y<=j+95 ){
		setnewarrt("src","img/images/interface/plantshadow32.png",img3);
		setnewarrt("src","http://pvz4.lonelystar.org/images/Plants/Peashooter/Peashooter.gif",img2);
		setnewarrt("style","position: absolute; left:"+(i-10-438-150).toString()+"px; bottom:"+(1260-j-233-45-60).toString()+"px;z-index:1",img2);
		setnewarrt("style","position: absolute; left:"+(i-10-438-10-150).toString()+"px; bottom:"+(1260-j-232-45-10-70).toString()+"px;z-index:0",img3);
		//new zw(wandousheshou,img2);
		}
	}
	}
	}

	
	
	
}}
function zw(){
}