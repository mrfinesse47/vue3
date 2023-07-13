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
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)
    const showPosts = ref(true)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        console.log(data)
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      } catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return { posts, showPosts, error }
  },
}
</script>
