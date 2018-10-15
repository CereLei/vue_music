<template>
<div class="singer-detail">
    sss
</div>
  <!-- <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition> -->
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
  export default {
    computed:{
      ...mapGetters([
        'singer'
      ])
    },
    created(){
      this._getDetail()
      console.log(this.singer)
    },
    methods:{
      _getDetail(){
        if(!this.singer.id){
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res)=>{
          if(res.code ===ERR_OK){
            console.log(res.data.list)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>