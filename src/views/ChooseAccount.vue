<template>
  <div class="container">
    <h2>Accounts</h2>
    <div>
      <p v-for="user in chatdatas" :key="user">{{ user }}</p>
    </div>
  </div>
</template>

<script>
import { auth, db } from "@/firebase/config";

import { ref } from 'vue';

export default {
  setup() {
    // let email=ref("");
    let chatdatas = ref([]);
    

    // let displayAllUser = async() => {
    //   auth.getUserByEmail(email)
  //   await auth.signInWithEmailAndPassword(email.value)
  // .then((docs) => {
  //   // See the UserRecord reference doc for the contents of userRecord.
  //   console.log(`Successfully fetched user data: ${docs.toJSON()}`);
  // })
  // .catch((error) => {
  //   console.log('Error fetching user data:', error);
  // });



      db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
        let results = [];

        snap.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          if (doc.data().created_at && !results.includes(document.user)) {
            results.push(document.user);
          }
        });

        // console.log(results)
        chatdatas.value = results;
        chatdatas.value.message="New Userfirebase login"
      });
    // };

    return { chatdatas };
  },
};
</script>

<style>
</style>
