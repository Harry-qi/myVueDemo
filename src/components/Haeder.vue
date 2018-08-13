<template>
  <header>
      <nav v-bind:style="background-color: #fff" v-on:mouseover:>
          <ul class="navUl">
              <li>菜单1</li>
              <li>菜单1</li>
              <li>菜单1</li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  data(){
    return {
    
    }
  }
}
</script>

<style>
header{
    position: relative;
    top: 0%;
    z-index: 999;
    
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
