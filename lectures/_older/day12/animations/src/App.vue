<template>
  <button type="button" @click="flag = !flag">Toggle</button>
<!--Css transition-->
<!--  <transition name="fade" mode="out-in">-->
<!--    <h2 v-if="flag" key="main">Hello World!</h2>-->
<!--    <h2 v-else key="secondary">Another Hello</h2>-->
<!--  </transition>-->

<!--  <transition name="zoom">-->
<!--    <h2 v-if="flag">Hello</h2>-->
<!--  </transition>-->

<!--Javascript transitions-->
  <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
  >
    <h2 v-if="flag">Hey</h2>
  </transition>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      flag: true
    }
  },
  methods:{
    beforeEnter(el){
      console.log('before enter', el)
    },
    enter(el, done){
      console.log('enter', el)

      const animation = el.animate([{transform: "scale3d(0,0,0)"}, {}], {
        duration: 1000
      })

      animation.onfinish = () => {
        done()
      }
    },
    afterEnter(el){
      console.log('after enter', el)
    },
    beforeLeave(el){
      console.log('before leave', el)

    },
    leave(el, done){
      console.log('leave', el)
      const animation = el.animate([ {},{transform: "scale3d(0,0,0)"}], {
        duration: 1000
      })

      animation.onfinish = () => {
        done()
      }
    },
    afterLeave(el){
      console.log('after leave', el)

    }
  }
}
</script>

<style>
h2{
  width: 400px;
  padding: 20px;
  margin: 20px;
}
/*Will apply when transition start*/
.fade-enter-form{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s linear;
}
.fade-enter-to{

}
/*Will apply when transition out*/
.fade-leave-from{

}
.fade-leave-active{

}
.fade-leave-to{
  transition: all 0.25s linear;
  opacity: 0;
}
/*===========================================*/
.zoom-enter.active{
  animation: zoom-in 1s linear forwards;
}
.zoom-leave-active{
  animation: zoom-out 1s linear forwards;
}
@keyframes zoom-in {
  from{
    transform: scale(0,0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from{
    transform: scale(1,1);
  }
  to {
    transform: scale(0, 0);
  }
}

</style>

