<template>
  <h1>Jobs Details Page</h1>
  <p>The Job ID is {{ id }}</p>
  <!-- the $route contains any information about the current route -->
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
