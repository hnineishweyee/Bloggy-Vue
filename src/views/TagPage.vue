<template>
    
<div class="tag">
  <div v-if="error">
    {{ error }}
  </div>

  <div v-if="posts.length" class="layout">
    <div> 
      <PostsList :posts="filteredPosts"> </PostsList>
    </div> 

    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>

  </div>

  <div v-else> 
    <SpinnerLoading></SpinnerLoading>
  </div>
</div>

  <div>
    <button class="return" @click="returnHome"> Return to Home </button>
  </div>
</template>

<script>
import { computed } from 'vue';

import SpinnerLoading from '../components/SpinnerLoading.vue';
import getPosts from "../composables/getPosts.js"
import PostsList from '@/components/PostsList.vue';
import TagCloud from '@/components/TagCloud.vue';

export default {
    props: ["tag"],

    components: { SpinnerLoading, PostsList, TagCloud },

    setup(props){

        let {posts, error, load}=getPosts();

        load();

        let filteredPosts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })

        let returnHome=function returnHome(){
          window.history.back()
        }

        return {posts, error, filteredPosts, returnHome}
    }
}
</script>

<style>

  .tag{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>