<template>
   <div class="main bg-gradient-to-t from-black to-gray-900 ">
        <div class="px-4 md:px-6 lg:px-2 pt-32 gap-4 lg:pt-40 max-w-8xl block items-center lg:flex">
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
        <div class="bg-white text-black py-16 px-8 lg:px-0  ">
         <div class="max-w-8xl">
            <div class="block lg:flex justify-center w-full gap-4">
              <div class="mx-auto w-full">
                <div
                  v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                    class="block md:flex border border-gray-300 border-surface shadow-lg max-w-lg mx-auto items-center rounded-2xl p-8"
                >
                    <div class="rounded-full bg-gray-900 mx-auto bg-primary text-white w-16 h-16 flex items-center justify-center">
                        <i class="pi pi-desktop !text-2xl"></i>
                    </div>
                    <div class="w-full md:w-3/4">
                      <div class="text-2xl font-bold text-center lg:text-left text-gray-800 mt-3 md:mt-0">Website design</div>
                      <div class=" text-center lg:text-left text-gray-800 mt-2">10 projects</div>
                    </div>
                </div>
                <div
                  v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                    class="block md:flex border border-gray-300 border-surface shadow-lg my-4 max-w-lg mx-auto items-center rounded-2xl p-8"
                >
                    <div class="rounded-full bg-yellow-500 mx-auto bg-primary text-white w-16 h-16 flex items-center justify-center">
                        <i class="pi pi-mobile !text-2xl"></i>
                    </div>
                    <div class="w-full md:w-3/4">
                      <div class="text-2xl font-bold text-center lg:text-left text-gray-800 mt-3 md:mt-0">App design</div>
                      <div class=" text-center lg:text-left text-gray-800 mt-2">6 projects</div>
                    </div>
                </div>
                <div
                  v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                    class="block md:flex border border-gray-300 border-surface shadow-lg max-w-lg mx-auto items-center rounded-2xl p-8"
                >
                    <div class="rounded-full bg-blue-500 mx-auto bg-primary text-white w-16 h-16 flex items-center justify-center">
                        <i class="pi pi-box !text-2xl"></i>
                    </div>
                    <div class="w-full md:w-3/4">
                      <div class="text-2xl font-bold text-center lg:text-left text-gray-800 mt-3 md:mt-0">Brand design</div>
                      <div class=" text-center lg:text-left text-gray-800 mt-2">15 projects</div>
                    </div>
                </div>
              </div>
              <div class="w-full mx-auto py-10 md:py-0">
                <h1 class="text-gray-900 font-mono mb-4 text-3xl md:text-5xl font-extrabold">What do i help ?</h1>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia necessitatibus sit. Nulla, labore! Officia consequatur teneturte poribus pariatur voluptates soluta suscipit enim voluptatem esse iste omniseaque blanditiis libero!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia necessitatibus sit. Nulla, labore! Officia consequatur teneturte poribus pariatur voluptates soluta suscipit enim voluptatem esse iste omniseaque blanditiis libero!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia necessitatibus sit. Nulla, labore! Officia consequatur teneturte poribus pariatur voluptates soluta suscipit enim voluptatem esse iste omniseaque blanditiis libero!
                </h1>
                <div class="grid mt-10 w-full mx-auto grid-cols-2">
                   <div>
                    <h1>20+</h1>
                    <h1>Projects completed</h1>
                   </div>
                   <div>
                     <h1>18+</h1>
                     <h1>Happy clients</h1>
                   </div>
                </div>
              </div>
          </div>
         </div>
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
.animate-enter {
  animation-fill-mode: both;
}

.fade-in-10 {
  opacity: 0;
  animation-name: fadeIn10;
}

.slide-in-from-t-20 {
  transform: translateY(-20px);
  animation-name: slideInFromT20;
}

.animate-duration-1000 {
  animation-duration: 1s;
}
.animate-duration-3000 {
  animation-duration: 3s;
}

@keyframes fadeIn10 {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInFromT20 {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0.1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-10.slide-in-from-t-20 {
  animation-name: fadeSlideIn;
}


.zoom-in-75 {
  transform: scale(0.75);
  animation-name: zoomIn75;
}

@keyframes zoomIn75 {
  0% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(1);
  }
}

.fade-in-10.slide-in-from-l-8 {
  animation-name: fadeSlideInL8;
}

@keyframes fadeSlideInL8 {
  0% {
    opacity: 0.1;
    transform: translateX(-8px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-duration-1000 {
  animation-duration: 1s; 
}

.fade-in-10.zoom-in-75 {
  animation-name: fadeZoomIn;
}

@keyframes fadeZoomIn {
  0% {
    opacity: 0.1;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
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