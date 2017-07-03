(function (){
  window.Movebtn=function Movebtn(ul,circles){
  	 this.container=ul;
     this.circles=circles;
     this.init=this.init();
     this.addevent=this.addevent();
  	 // console.log(this.container);
  }
  Movebtn.prototype={
     init:function (){
       this.circles[0].style.backgroundColor="#ff3366";
     },
  	 addevent:function (){
        var me = this;
        var idx=false;
  	 	  var dX;
        var startX;
        var startTime;
        var windowWidth=document.documentElement.clientWidth;
        this.container.addEventListener("touchstart",touchStart,false);
        this.container.addEventListener("touchmove",touchMove,false);
        this.container.addEventListener("touchend",touchEnd,false);
        this.container.style.transform = 'translateX('+ 0 +'px)';
        this.container.style.transition ="all .5s ease 0s";
       function touchStart (event){
         if(event.touches.length>1){
         	return ;
         }
         dX=event.touches[0].clientX;
         startX=event.touches[0].clientX;
  	   }
       function touchMove(event){
         if(event.touches.length>1){
         	return ;
         }
         // console.log(this)
         var clientX=event.touches[0].clientX;
         startTime = new Date();
         dX=clientX-startX;
         // console.log(dX);
         if(!idx){
            this.style.transform="translateX("+dX+"px)";
            me.circles[1].style.backgroundColor="#ff3366";
            me.circles[0].style.backgroundColor="#333";
         }else if(idx){
           this.style.transform="translateX("+(dX-windowWidth)+"px)";
            me.circles[1].style.backgroundColor="#333";
            me.circles[0].style.backgroundColor="#ff3366";
         }
      
       }
       function touchEnd(event){
            var distance = event.changedTouches[0].clientX - startX;
            var time=new Date() - startTime;

            if(idx){
                if (distance >= windowWidth / 2 || (distance > 50 && time<300)){
                      this.style.transform = "translateX(0px)";
                      idx=!idx;
                }else{
                      this.style.transform="translateX("+-windowWidth+"px)";
                }
            }else if(!idx){
                if(distance <= -windowWidth / 2 || (distance < -50 && time < 300)){
                      this.style.transform="translateX("+-windowWidth+"px)";
                      idx=!idx;
                }else{
                     this.style.transform="translateX(0px)"; 
                }
            }
            if(idx){
            me.circles[1].style.backgroundColor="#ff3366";
            me.circles[0].style.backgroundColor="#333";
            }else if(!idx){
            me.circles[1].style.backgroundColor="#333";
            me.circles[0].style.backgroundColor="#ff3366";
     
            }

       }

  	 }

  }

 
})()