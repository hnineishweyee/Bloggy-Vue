import { ref } from "vue"
import { db } from "../firebase/config"

let getPost=(id)=>{
    let post = ref(null)

    let error = ref("")

    let load = async()=>{
        try{
        
            // POST တစ်ခုချင်းဆီကို 3 sec ကြာ loading တက်ပြီးမှ ပြခိုင်း
            // await new Promise((resolve,reject)=>{
            // setTimeout(resolve,3000)
            // })
            
            // let response = await fetch("http://localhost:3000/posts/"+id)
            // if (response.status===404){
            //     throw new error("404 NOT FOUND.")
            // }
            // let data = await response.json()
            // post.value=data

            let doc = await db.collection("posts").doc(id).get()
                post.value={id:doc.id,...doc.data()}
        }
        catch(err){
            error.value=err.message
        }
    }
    return{post,error,load}
}

export default getPost