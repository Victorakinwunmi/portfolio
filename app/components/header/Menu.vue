<template>
    <div class="block lg:flex text-gray-900 lg:text-white font-semibold justify-center">
      <nuxt-link to="/" class="block hover:border rounded-full mx-4 my-4 text-md lg:text-lg  lg:my-0 lg:mx-2 w-32 lg:w-full  lg:px-2 pb-1 hover:text-gray-500 border-transparent duration-500 ease-in-out"><slot name="abouttext" /></nuxt-link>
      <nuxt-link to="/" class="block mx-4 my-4 text-md lg:text-lg  lg:my-0 lg:mx-2 w-32 lg:w-full lg:px-2 pb-1 hover:text-gray-500 border-transparent duration-500 ease-in-out" ><slot name="workstext" /></nuxt-link>
      <nuxt-link to="/" class="block mx-4 my-4 text-md lg:text-lg  lg:my-0 lg:mx-2 w-32 lg:w-full lg:px-2 pb-1 hover:text-gray-500 border-transparent duration-500 ease-in-out"><slot name="servicestext" /></nuxt-link>
      <nuxt-link to="/" class="block mx-4 my-4 text-md lg:text-lg  lg:my-0 lg:mx-2 w-32 lg:w-full lg:px-2 pb-1 hover:text-gray-500 border-transparent duration-500 ease-in-out"><slot name="contacttext" /></nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>