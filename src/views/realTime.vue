<template>
  <h1> Real Time Database Test </h1>

  <div v-for="post in posts" :key="post.id">
    <div>
        <h1> {{ post.title }} </h1>
        <p> {{ post.body }} </p>
    </div>

    <hr>

  </div>
</template>

<script>

import { db } from '@/firebase/config';
import { ref } from 'vue';

export default {
    setup(){

        let posts = ref([])

        db.collection("posts").orderBy("created_at","desc").onSnapshot((snap)=>{
            posts.value = snap.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            })
        })

        return {posts}
    }
}
</script>

<style>

</style>