<template>
      <div class="header" @mouseover="changeBgW" @mouseleave="changeBgT" @scroll="changeBgW" :style="{background:color}">
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
      changeBgW:function(e){
              this.color = "#fff";
              e = e || window.event;  
                if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件               
                    if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                        console.log("滑轮向上滚动");  
                    }  
                    if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                        console.log("滑轮向下滚动");  
                    }  
                } else if (e.detail) {  //Firefox滑轮事件  
                    if (e.detail> 0) { //当滑轮向上滚动时  
                        console.log("滑轮向上滚动");  
                    }  
                    if (e.detail< 0) { //当滑轮向下滚动时  
                        console.log("滑轮向下滚动");  
                    }  
                }  
      },
      changeBgT:function(){
              this.color = "transparent"
      }
  },
   created() {
        window.addEventListener('scroll', this.changeBgW);
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
