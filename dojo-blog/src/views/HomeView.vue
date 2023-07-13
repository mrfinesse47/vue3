<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search" />
    <p>search term : {{ search }}</p>

    <div v-for="name in names" :key="name">
      <p>{{ name }}</p>
    </div>
    <h3>matching names</h3>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="stopWatching">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['mario', , 'wario', 'rex', 'yoshi', 'natalie'])
    const stopWatch = watch(search, () => {
      console.log('watch fx ran')
    })
    // // watchefect only runs initially
    // watchEffect(() => {
    //   console.log('watch effect function ran')
    // })
    // but if you use a ref it will, so it runs everytime search changes
    // it watches any dependancies
    const stopEffect = watchEffect(() => {
      // useful for grabbing data like useeffect in react
      console.log('watch effect function ran', search.value)
    })
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    const stopWatching = () => {
      stopWatch()
      stopEffect()
    }
    return { names, search, matchingNames, stopWatching }
  },
}
</script>
