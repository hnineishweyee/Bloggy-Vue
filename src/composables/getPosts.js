import { ref } from "vue"
import { db } from "@/firebase/config";

let getPosts = () => {

    let posts = ref([])

    let error = ref("");

    let load = async()=>{
      try{

        // LOADING တက်ဖို့ အချိန်ကြာအောင် ကိုယ့်ဘာသာဖန်တီးထားတဲ့ PROMISE
        // await new Promise((resolve, reject)=>{
        //   setTimeout(resolve,3000)
        // })

        // let response = await fetch("http://localhost:3000/posts/")

        // if (response.status===404){
        //   throw new Error("404 NOT FOUND");
        // }

        // let datas = await response.json()
        // posts.value = datas

        let res = await db.collection("posts").orderBy("created_at","desc").get()
          posts.value=res.docs.map((doc)=>{
            return {id:doc.id,...doc.data()}
          })

      }catch(err){
        error.value=err.message
      }
    }
    return { posts, error, load}
}

export default getPosts;