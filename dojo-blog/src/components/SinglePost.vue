<template>
  <div>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h4>{{ post.title }}</h4>
    </router-link>

    <p>
      {{ snippet }}
    </p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  setup(props) {
    const snippet = computed(() => props.post.body.substring(0, 100) + '....')
    return { snippet }
  },
  props: ['post'],
}
</script>

<style></style>
