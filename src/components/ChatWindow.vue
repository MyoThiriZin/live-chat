<template>
  <div class="message-window" ref="msgBox">
    <div class="messages" v-for="chatdata in formattedDatas" :key="chatdata.id">
        <div class="single">
            <span class="created">{{chatdata.created_at}} ago</span>
            <span class="name">{{chatdata.user}}</span>
            <span class="message">{{chatdata.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { computed, onUpdated, ref } from 'vue'
import { formatDistanceToNow } from 'date-fns'      //npm install date-fns
export default {
    setup(){
        let chatdatas=ref([]);
        let msgBox=ref(null)

        onUpdated(()=>{
            msgBox.value.scrollTop=msgBox.value.scrollHeight;
        })

        let formattedDatas=computed(()=>{
            return chatdatas.value.map((msg)=>{
                let formattedTime=formatDistanceToNow(msg.created_at.toDate());
                return {...msg,created_at:formattedTime}
            })
        })

        // OR 


        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results=[];
           
            snap.docs.forEach((doc)=>{
                let document={...doc.data(),id:doc.id};
                // console.log(document)
                // if(doc.data().created_at){
                    doc.data().created_at && results.push(document);
                // }
             

            })
            // console.log(results)
            chatdatas.value=results;
        })

        return {chatdatas,formattedDatas,msgBox}
    }
}
</script>

<style>
    .message-window {
        overflow: auto;
        height: 450px;
    }
    .single {
        background-color: #fef;
        padding: 5px;
        margin: 10px 0;
    }
    .single .created {
        display: block;
        font-size: 13px;
        color: #db7ce3;
    }
    .single .name {
        font-weight: bold;
        margin-right: 10px;
    }
</style>