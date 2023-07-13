<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'lorem ipsum1', id: 1 },
      { title: 'top 5 css tips', body: 'lorem ipsum2', id: 2 },
    ])
    const showPosts = ref(true)
    return { posts, showPosts }
  },
}
</script>
