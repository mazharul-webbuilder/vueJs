<template>
  <div class="result">
    <div class="title">{{results[resultIndex].title}}</div>
    <div class="desc">{{results[resultIndex].desc}}</div>
  </div>
</template>

<script>
export default {
  name: "ResultComponent",
  props: ['results', 'totalCorrect'],
  computed: {
    resultIndex(){
      console.log(this.totalCorrect)
      let i = 0
      this.results.forEach((element, index) => {
        if (element.min <= this.totalCorrect && element.max >= this.totalCorrect){
          i = index;
        }
      })
      return i
    }
  }
}
</script>