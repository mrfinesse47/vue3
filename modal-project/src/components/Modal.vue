<template>
  <div class="backdrop">
    <div class="modal">
      <p>Modal Content</p>
    </div>
  </div>
</template>
<style scoped>
/* use scoped to prevent styles from overriding globally */
/* you can inspect the css to see additional data attribute */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
</style>
