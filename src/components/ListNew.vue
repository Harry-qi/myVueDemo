<template>
  <div class="ListNew">
    <ul class="listUl">
        <li v-for="result in results" class="listLi">
            <div class="newsImg"><a href="javascript:;"></a></div>
            <h3><a href="javascript:;" class="titleLink">{{result.title}}</a></h3>
        </li>
    </ul>
    <!-- <i class="iconfont icon-shang"></i> -->
  </div>
</template>

<script>

export default {
  name: 'ListNew',
  data(){
      return {
        results: [],
      }
  },
 mounted() {
        axios.get("https://zhihu-daily.leanapp.cn/api/v1/last-stories")
        .then(response => {
           this.results=response.data.STORIES.stories
           console.log(response.data.STORIES.stories)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listUl{
    max-width: 1800px;
    margin: 0 auto;
    padding: 76px 60px 0;
    overflow: hidden;
    height: 340px;
}
.listLi{
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: 0 20px;
}
.listLi:nth-child(1) div{
    width: 100%;
    height: 241px;
    background: url("https://t1.kakaocdn.net/kakaocorp/admin/main-banner/94");
    background-size: cover
    /* background: url("../assets/logo.png") */
}
.listLi:nth-child(2) div{
    width: 100%;
    height: 241px;
    background: url("https://t1.kakaocdn.net/kakaocorp/admin/main-banner/95");
    background-size: cover
}
.listLi:nth-child(3) div{
    width: 100%;
    height: 241px;
    background: url("https://t1.kakaocdn.net/kakaocorp/operating/co/main-content/3254.png") ;
    background-size: cover
}
.listLi h3{
    margin-top: 20px;
}
.newsImg a{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.titleLink{
    font-size: 20px;
    line-height: 32px;
    color: #1e1e1e;
    text-decoration: none;
}
.titleLink:hover{
    text-decoration: underline 
}
</style>
