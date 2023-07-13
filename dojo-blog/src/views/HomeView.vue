<template>
  <div class="home">
    home

    <p ref="p">My Name is: {{ ninjaOne.name }}</p>
    <p>And my age is: {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update 1</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} -- {{ ninjaTwo.age }} -- {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">update 2</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 29 })

    // we cant use primitives for reactive

    const nameTwo = reactive('yoshi')

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40
      // we dont need to use .value in reactive
      nameTwo = 'luigi'
      // cannot uodate nameTwo since it is primitive
    }
    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo }
  },
}
</script>
