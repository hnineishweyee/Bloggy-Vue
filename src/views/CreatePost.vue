<template>
  
    <form @submit.prevent="addPost">
        <h1> Add Post </h1>

        <label>Title</label>
        <input type="text" v-model="title" required>

        <label>Body</label>
        <textarea v-model="body" required></textarea>

        <label>Tags(press enter to add a tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">

        <div v-for="tag in tags" :key="tag" class="pill">
            {{ tag }}
        </div>

        <button> Add Post </button>
    </form>
</template>

<script>
import { handleError, ref } from 'vue'
import { useRouter } from 'vue-router'
import { db, timestamp } from '@/firebase/config'


export default {
    setup(){

        let router = useRouter()    // this.$router
        let title = ref("")
        let body = ref("")
        let tag = ref("")
        let tags = ref([])

        let handleKeydown=()=>{
            if (!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value="";
        }

        let addPost=async()=>{

          let newPost = {
            title:title.value,
            body:body.value,
            tags:tags.value,
            created_at:timestamp()
          }

          let res = await db.collection("posts").add(newPost)
            // await fetch("http://localhost:3000/posts/",{
            //     method:"POST",

            //     headers:{
            //         "Content-type":"application/json"
            //     },
                
            //     body:JSON.stringify(  // SERVER ကို သွားပို့တဲ့ DATA
            //         {
            //             title:title.value,
            //             body:body.value,
            //             tags:tags.value
            //         }
            //     )
                
            // })

            // REDIRECT USER TO HOME PAGE
            router.push({name:'home'})

        }


        return {title, body, tag, handleKeydown, tags, addPost}

    }
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
    font-size: medium;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #00aeff;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #00aeff;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>