<template>
  <div>
    <h3>
      {{ snippet }}
    </h3>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  setup(props) {
    const snippet = computed(() => props.post.body.substring(0, 3) + '....')
    return { snippet }
  },
  props: ['post'],
}
</script>

<style></style>
