<template>
  <div class="home">

    <div v-if="error"> 
      {{ error }}
    </div>
    
    <div v-if="posts.length>0" class="layout">
        <div>
          <PostsList :posts="posts"> </PostsList>
        </div>

        <div>
          <TagCloud :posts="posts"></TagCloud>
        </div>
    </div>

    <div v-else> 
      <SpinnerLoading>
      </SpinnerLoading> 
    </div>

  </div>
</template>

<script>
import SpinnerLoading from '../components/SpinnerLoading.vue';
import PostsList from '../components/PostsList.vue'
import getPosts from '../composables/getPosts.js'
import TagCloud from '@/components/TagCloud.vue';

export default {
  components: { PostsList, SpinnerLoading, TagCloud },
  
  setup(){

    // COMPOSABLE FUNCTION
    let {posts, error, load} = getPosts() // DESTRUCTURING လုပ်

    load();
    
    return {posts,error};
  },
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap:20px;
  }
</style>

<!-- DESTRUCTURING
let {name,age}={name:"Yoichi", age:17}
console.log(name) -->