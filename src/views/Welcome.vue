<template>
  <div class="welcome container">
    
    <div v-if="showLogin">
      <Login @enterChatroom="enterChatroom"></Login>
      <p><span @click="showLogin=!showLogin">create account?</span></p>
    </div>
    <div v-else>
      <SignUp @enterChatroom="enterChatroom"></SignUp>
      <p><span @click="showLogin=!showLogin">Already had account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, SignUp
  },
  setup(){
    let showLogin=ref(true);
    let router=useRouter();
    let enterChatroom=()=>{
      router.push({name:"Chatroom"})
      
    }
    return {showLogin,enterChatroom}
  }

}
</script>

<style>
.welcome {
  text-align: center;
}
.welcome p span {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
</style>