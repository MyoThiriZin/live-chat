<template>
  <form class="text-area">
    <textarea placeholder="Press enter to send" @keypress.enter.prevent="handleSendText" v-model="message"></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composable/getUser';
import { timestamp } from '@/firebase/config';
import useCollection from '../composable/useCollection'
export default {
    setup(){
        let message=ref("");
        let {user}=getUser();
        let {error,addDoc}=useCollection("messages");

        let handleSendText=async()=>{
            let chat={
                message: message.value,
                user: user.value.displayName,
                created_at: timestamp(),
            }

            // console.log(chat);
            await addDoc(chat);
            message.value="";
        }

    return {message,handleSendText}
    }
}
</script>

<style>
.text-area {
    border-top: 1px solid #ddd;
    margin: 20px 0 0;
    padding: 20px 0 0;
}
.text-area textarea{
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}
.text-area textarea:focus-visible{
    outline: none;
}
</style>