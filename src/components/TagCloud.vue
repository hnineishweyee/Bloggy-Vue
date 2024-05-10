<template>
  <div class="tag-cloud">
    <h1> Tag Cloud </h1>
  
    <div v-for="tag in uniqueTag" :key="tag">
        <router-link :to="{name:'tag',params:{tag}}" class="tag">{{tag}}</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {

    props:["posts"],

    setup(props){

        let tags =ref([])

        props.posts.forEach((post) => {
            post.tags.forEach((tag)=>{
                tags.value.push(tag)
            })
        });

        let uniqueTag = tags.value.filter((tag, index, array)=>{
            return array.indexOf(tag)===index
        })
        return {uniqueTag}
    }
}
</script>

<style>
   .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #00aeff;
    font-weight: bold;
  }
</style>