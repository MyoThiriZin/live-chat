<template>
<nav v-if="user">
    <div>
        <p>Hi, {{user.displayName}}</p>
        <p class="email">Logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
</nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from 'vue'
import UseLogout from '../composable/UseLogout'
import UseUser from '../composable/getUser'
export default {
    setup(){
        // let error=ref(null)
        let {user} = UseUser();
        let { error, logoutAccount}=UseLogout();
        let logout=async()=>{
            // try{
            //     await auth.signOut();
            //     console.log("User Logout")
            // } catch(err) {
            //     error.value=err.message;
            // }
            await logoutAccount();
        }

        // let user=ref(auth.currentUser)
        // auth.onAuthStateChanged((_user)=>{
        //     console.log("User state changed. Current user is ", _user);
        //     user.value=_user;
        // })

        return {logout,user}
    }
}
</script>

<style>
nav {
    display: flex;
    justify-content: space-between;
}
nav p {
    margin: 0;
}
</style>