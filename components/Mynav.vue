<template>
    <div class=" md:hidden ">
        <button 
        @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:texbluei4e focus:text-white focus:outline-none">
          <IconsMenu v-if="!isOpen" />
          <IconsClose v-if="isOpen" />
        </button>
    </div>
    <nav class="hidden md:block mt-2">
      <div class="flex flex-row justify-between px-[150px] ">
        <div class="flex flex-row gap-2 items-center ">
          <img src="/public/logo.svg" alt="logo img" hight="34" width="34">
          <p class="font-bold text-lg ">Ma Guy</p>
        </div>
        <ul class="flex gap-1 font-bold">
          <li class="text-lg px-4 py-2 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="text-lg px-4 py-2 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="text-lg px-4 py-2 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li class="text-lg text-white px-4 py-2 bg-[#9747FF] rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>  
      </div>
      
    </nav>
</template>
<script>
  export default {
  name: 'SpecialNavBar',

  data() {
    return {
      isOpen: false,
    }
  },

}
</script>

