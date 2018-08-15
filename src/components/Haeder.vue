<template>
      <div class="header" @mouseover="changeBgW" @mouseleave="changeBgT" @scroll="scrollFn(e)" :style="{background:color}">
        <nav>
            <ul class="navUl">
                <li>菜单1</li>
                <li>菜单1</li>
                <li>菜单1</li>
            </ul>
        </nav>
      </div>
</template>

<script>
export default {
  name: 'headerBox',
  data(){
    return {
      color:"transparent"
    }
  },
  methods:{
      changeBgW:function(){
              this.color = "#fff";
      },
      changeBgT:function(){
              this.color = "transparent"
      },
      scrollFn:function(e){
                e = e || window.event;  
                if (e.wheelDelta) {                
                    if (e.wheelDelta > 0) { 
                         this.color = "transparent"
                    }  
                    if (e.wheelDelta < 0) { 
                        this.color = "#fff";
                    }  
                } else if (e.detail) {  
                    if (e.detail> 0) {
                        this.color = "transparent"
                    }  
                    if (e.detail< 0) {
                        this.color = "#fff";
                    }  
                }  
      }
  },
   created() {
        if (document.addEventListener) {//firefox  
                document.addEventListener('DOMMouseScroll', this.scrollFn, false);  
            }  
       window.onmousewheel = document.onmousewheel = this.scrollFn;
    },
}
</script>

<style>
.header{
    position: fixed;
    top: 0%;
    z-index: 999;
    width: 100%;
    height: 60px;
}
nav{
    height: 60px;
    line-height: 60px;
    width: 400px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -200px;
}
.navUl{
    float: left;
    height: 60px;
    margin-left: 5px;
}
.navUl li{
    float: left;
    padding: 0 14px 0 13px;
    font-size: 16px;
    line-height: 58px;
    color: #1e1e1e;
    font-family: 'NotoSans Regular'
}
</style>
