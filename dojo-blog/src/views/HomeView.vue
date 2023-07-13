<!--  @ 14:25 -->

<template>
  <div class="home">
    home

    <p ref="p">My Name is: {{ name }}</p>
    <p>And my age is: {{ age }}</p>
    <button @click="handelClick">Click Me</button>
    <button @click="age++">Add one to age</button>
    <input type="text" v-model="name" />
    <!-- outside in the template we dont need .value -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    // we have only used refs to get a template ref so far

    const name = ref('Mario')
    // // when we use ref to surround a value it becomes reactive
    // refs are pointers so we can assign to const

    const age = ref(30)

    const handelClick = () => {
      // name = 'luigi'  fails to update the name in the template
      name.value = 'luigi'
      age.value = 36
    }
    return { name, age, handelClick }
  },
}
</script>
