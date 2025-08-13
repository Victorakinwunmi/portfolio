<template>
    <div class="">
        <div class="flex justify-center gap-4 ">
          <div class="text-white font-semibold text-md lg:text-lg"><slot name="num_btn"/></div>
          <div class="text-white font-semibold text-md lg:text-lg" @click="goWhatsapp"><slot name="ws_btn"/></div>
          <div class="text-white font-semibold text-md lg:text-lg"><slot name="email_btn"/></div>
        </div>
    </div>
</template>

<script>
export default {
 methods:{
   goWhatsapp(){
     window.location = 'https://api.whatsapp.com/send?phone=2348104782750&text=' + 'Hey, I\'m ' + '(name and message)'
   }
 }
}
</script>

<style>

</style>