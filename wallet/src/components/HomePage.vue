
<template>

    <div>
        <input type="text" name="InputTxt" id="InputTxt" />
        <button v-on:click="myfunc" class="button">
            <router-link :to="{ name: 'FrontPage', params: {accountName: 'My Wallet'}}">
                Create wallet
            </router-link>
            </button>
            
    </div>
   
</template>

<script>
  function myfunc(){
     document.getElementById(InputTxt).removeAttribute(hidden);
  }
</script>