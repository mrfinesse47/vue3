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
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['mario', , 'wario', 'rex', 'yoshi', 'natalie'])
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    return { names, search, matchingNames }
  },
}
</script>
