(function (){
  window.Movead=function Movead(ul){
  	 this.container=ul;
  	 this.addevent=this.addevent();
     this.position=0;
  	 // console.log(this.container);
  }
  Movead.prototype={
  	 addevent:function (){
        var idx=false;
  	 	  var dX;
        var startX;
        var startTime;
        var me=this;
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
         this.style.transform="translateX("+(me.position+dX)+"px)";
         // console.log(dX);
         // console.log(me.position);
      
       }
       function touchEnd(event){
            me.position +=event.changedTouches[0].clientX - startX;
            if(me.position > 0){
              this.style.transform="translateX(0px)";
              me.position=0;
              }else if(me.position < (windowWidth-me.container.offsetWidth)){
               this.style.transform="translateX("+(windowWidth-me.container.offsetWidth)+"px)";
               me.position=windowWidth-me.container.offsetWidth;

              }else{this.style.transform="translateX("+me.position+"px)"
            }

       }
  	 }
  }

 
})()