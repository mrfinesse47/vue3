<!--  @ 14:25 -->

<template>
  <div class="home">
    home

    <p ref="p">My Name is: {{ name }}</p>
    <p>And my age is: {{ age }}</p>

    <button @click="handelClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    let name = 'Mario'
    // important: these are not reactive values, so if they change the dom wont update
    let age = 30

    //  a refs example, we need to import the ref func

    const p = ref(null)

    const handelClick = () => {
      console.log(p, p.value)
      // now you can manipulate the p.value add classes etc
      p.value.classList.add('test')
      p.value.textContent = 'hello ninjas'
    }
    return { name, age, handelClick, p }
  },
}
</script>
