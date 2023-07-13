<template>
  <div>
    <h4>{{ post.title }}</h4>
    <p>
      {{ snippet }}
    </p>
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
