<template>
  <h1>{{counter.count}}</h1>
</template>

<script>
import {useCounterStore} from "@/stores/CounterStore.js";

let counter = useCounterStore()
export default {
  name: "App",
  data(){
    return {
    }
  }
}
</script>