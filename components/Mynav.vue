<template>
  <nav class="fixed w-full pt-6 px-[18px] bg-transparent">
    <div class="flex items-center justify-between md:mx-44">

      <!-- Header logo -->
      <div class="flex flex-row gap-1">
        <img src="/public/logo.svg" alt="logo img" hight="34" width="34">
        <p class="font-bold text-lg ">Ma Guy</p>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg 
            class="h-8 w-8 fill-current text-black"
            fill="none" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2" 
            viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex items-center space-x-8 text-sm font-sans ">
          <li class="text-lg font-semibold text-semibold my-4 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="text-lg font-semibold my-4 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="text-lg font-semibold my-4 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li class="cta bg-[#9747FF] h-10 w-28 hover:bg-[#D4C3EF] px-3 py-2 rounded-full text-white text-center font-semibold">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg 
              class="w-6 h-6"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <Tailwind />
        </span>

        <ul class="divide-y font-sans">
          <li @click="isOpen = false" class="text-lg my-4 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li @click="isOpen = false" class="text-lg my-4 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li @click="isOpen = false" class="text-lg my-4 rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li @click="isOpen = false" class="text-lg text-center text-white px-4 py-2 bg-[#9747FF] rounded-full hover:text-[#D4C3EF]">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
        <div class="follow mt-4">
          <p class="italic font-sans text-sm">follow me on:</p>
          <div class="social flex space-x-5 mt-4 ">
            <a href="#">
              <svg 
                aria-hidden="true" focusable="false" 
                data-prefix="fab" data-icon="twitter" 
                class="h-5 w-5 fill-current text-gray-600" role="img" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="https://dribbble.com/Ma_Guy">
              <IconsDribble />
            </a>
            <a href="https://www.behance.net/alhassansalu">
              <IconsBehance />
            </a>
            <a href="https://www.linkedin.com/in/salu-alhassan-7112841b1/">
              <IconsLinkedin /> 
            </a>
          </div>
        </div>

      </aside>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>