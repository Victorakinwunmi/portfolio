<template>
   <div class="main bg-gradient-to-t from-black to-gray-900 ">
      <div class="px-4 md:px-6 lg:px-0 pt-32 gap-4 lg:pt-40 max-w-8xl block items-center lg:flex">
        <div class="w-full lg:w-2/4 text-white type">
           <p class="text-xl lg:text-4xl font-bold">HI THERE , I'M VICTOR ...</p>
           <div class="mt-2 w-full lg:w-sm lg:mt-4 text-lg lg:text-4xl">
             BUILDING <span class="text-blue-300 font-bold">DIGITAL WEBSITE </span>EXPERIENCE
           </div>
           <div class="mt-2 lg:mt-6">
            I'm a Front-End Developer passionate about building responsive, user-friendly, and visually appealing web applications. With expertise in <span class="text-blue-200 font-bold">Vue.js, JavaScript, HTML, and CSS,</span> I bring ideas to life and deliver high-quality solutions that exceed expectations. I thrive on turning complex problems into simple, intuitive designs that captivate users and drive results. With a keen eye for detail and a commitment to staying up-to-date with the latest trends and technologies, I craft digital experiences that are both functional and beautiful. Let's collaborate to create something amazing!
           </div>
           <form @submit.prevent="sendEmail" class="mt-10 flex gap-2 w-full md:w-md">
             <input type="email" v-model="user_repecient" placeholder="Email Address" class=" md:w-4/6 font-semibold bg-white rounded-sm px-6 py-4 text-black outline-0">
             <button type="submit" class=" md:w-2/6 p-1 sm:text-xs md:text-base truncate md:p-2 bg-blue-300 rounded-sm font-bold cursor-pointer">Connect with me</button>
           </form>
        </div>
        <div class="w-full lg:w-2/4">
          <div class="rounded-full mt-4 md:mt-6 lg:mt-0 border-t-2 border-white overflow-hidden flex items-center bg-gray-00">
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
     myEmail:'adexvictor94@gmail.com',
     user_repecient:"",
    }
  },
  methods:{
    sendEmail() {
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(this.user_repecient)) {
        const subject = 'Website Development';
        const body = 'Hi , my name is (name) and would like you to create me (details)'; 
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.myEmail}&su=${subject}&body=${body}`;
      } else {
        alert('Please enter a valid email address');
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