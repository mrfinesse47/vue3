<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="!posts.length">Loading</div>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const showPosts = ref(true)
    const { posts, error, load } = getPosts()
    load()

    return { posts, showPosts, error }
  },
}
</script>
