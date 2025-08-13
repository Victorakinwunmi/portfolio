<template>
   <div class="main bg-gradient-to-t from-black to-gray-900 ">
      <div class="px-4 md:px-6 lg:px-0 pt-32 gap-2 lg:pt-40 max-w-8xl block items-center lg:flex">
        <div class="w-full lg:w-2/4 text-white type">
           <p class="text-xl lg:text-4xl font-bold">HI THERE , I'M VICTOR ...</p>
           <div class="mt-5 w-full lg:w-sm lg:mt-8 text-lg lg:text-4xl">
             BUILDING <span class="text-blue-300 font-bold">DIGITAL WEBSITE </span>EXPERIENCE
           </div>
           <div class="mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem rem, ex molestias accusantium, deserunt non odio doloribus   repellendus   ossimus praesentium eum repellat molestiae id veritatis, quod esse earum quaerat?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem rem, ex molestias accusantium, deserunt non odio doloribus   repellendus   ossimus praesentium eum repellat molestiae id veritatis, quod esse earum quaerat?
           </div>
           <form @submit.prevent="sendEmail" class="mt-10 hidden md:flex gap-2 w-md">
             <input type="email" v-model="email" placeholder="Email Address" class="w-4/6 font-semibold bg-white rounded-sm px-6 py-4 text-black outline-0">
             <button type="submit" class="w-2/6 p-2 bg-blue-300 rounded-sm font-bold cursor-pointer">Connect with me</button>
           </form>
        </div>
        <div class="w-full lg:w-2/4">
          <div class="rounded-full mt-2 md:mt-6 lg:mt-0 border-t-2 border-white overflow-hidden flex items-center bg-gray-00">
            <img src="/image/adex.png" class="w-full mt-12"/>
          </div>
        </div>
      </div>
      <div class="bg-white text-black py-96 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nulla officia, tempora, iste itaque ad nihil voluptas, omnis dolorem est corrupti et deserunt porro asperiores quisquam vero quas architecto.
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
      
      email:"adexvictor94@gmail.com",
    }
  },
  methods:{
    sendEmail() {
     if (this.email) {
      const encodedSubject = encodeURIComponent(this.subject);
      const encodedBody = encodeURIComponent(this.body);
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${encodedSubject}&body=${encodedBody}`;
    } else {
      alert('Enter a valid email please')
     }
  }
  }
   
}
</script>

<style>
.type p{
  display: inline-block;
  letter-spacing: 0.1em;
  width:0;
  border-right: solid 3px white;
  overflow: hidden;
  white-space: nowrap;
  animation: type 4s steps(21) 1s forwards,blink 0.5s steps(1) infinite;
}
@keyframes type {
  to{width: 25ch;}
}
@keyframes blink {
  from{border-color: transparent;}
  50%{border-color: white;}
  to{border-color: transparent;}
}
</style>