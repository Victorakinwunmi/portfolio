<template>
    <div class="fixed top-0 z-50 w-full" :class="sticky_nav ? 'shadow-xl bg-gray-900 transition duration-500 ease-in-out' : 'bg-gray-900 transition duration-500 ease-in-out'">
      <div class="flex max-w-8xl px-2 lg:px-0 py-2 items-center justify-between mx-auto">
        <div class="w-1/3 lg:w-2/6">
          <slot name="logo"/>
        </div>
        <div class="">
          <div
            :class="is_revealed ? 'hidden' : 'block lg:hidden'"
            @click="showMenu"
            class="p-4"
          >
            <div class="">
              <slot name="hamburgermenuopen"></slot>
            </div>
          </div>

          <div
            :class="is_revealed ? 'block' : 'hidden lg:hidden'"
            @click="hideMenu"
            class="p-4"
          >
            <div>
              <slot name="hamburgermenuclose"></slot>
            </div>
          </div>
        </div>
        <div
          :class="is_revealed
              ? 'block top-14 right-0 w-full h-screen absolute mt-11 bg-gray-200 '
              : 'hidden bg-gray-800 justify-center p-4 rounded-full lg:flex w-2/6 '
          "
          class=""
        >
          <slot name="menu"/>
        </div>

        <nuxt-link to="" class="hidden lg:block lg:w-2/6">
          <slot name="login"/>
        </nuxt-link>

      </div>
    </div>
</template>

<script>

export default {
  props: {
    scrollPoint: {
      default: 115,
      type: Number,
    },
  },
  data() {
    return {
      is_revealed: false,
      sticky_nav:false,
    };
    
  },
  methods: {
    showMenu() {
      this.is_revealed = true;
    },
    hideMenu() {
      this.is_revealed = false;
    },
    handleStickyNavigation() {
      if (window.pageYOffset > this.scrollPoint) {
        this.sticky_nav = true;
      } else {
        this.sticky_nav = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleStickyNavigation);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleStickyNavigation);
  },
};
</script>

<style>
  @media screen and (min-width:1268px)
  { 
    .max-w-8xl{
    width: 85%;
    margin: 0 auto;
  }
  }
  .max-w-full{
    width:100%;
  }
 
</style>