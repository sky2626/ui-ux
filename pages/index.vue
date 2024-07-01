<template>
    <div class="flex flex-col gap-[18px] pt-8 main h-screen">
        <div>
            <div class="flex items-center justify-center">
                <img src="/public/Star1.svg" alt="Star" loading="lazy">
                <img src="/public/hand.svg" alt="Waving Handing" width="60" height="60" loading="lazy">
                <p class="text-xl md:text-2xl text-wrap" loading="lazy">, my name is Salu Alhassan and am a</p>
            </div>
            <div class="flex flex-row gap-6 justify-center">
                <img src="/public/Star2.svg" alt="" loading="lazy">
                <p class="text-6xl font-extrabold">UX & UI</p>
                <img src="/public/Star2.svg" alt="" loading="lazy">
            </div>
            <div class="flex flex-row gap-[18px] relative justify-center">
                <div class="max-w-[600px]">
                    <img src="/public/Designer.svg" alt="" loading="lazy"> 
                </div>
                <div>
                    <img src="/public/Star3.svg " alt="star" width="46" height="40" loading="lazy">
                </div>
            </div>
            <div class="top-[300px] md:top-[290px] left-[50px] md:left-[35%] absolute">
                <div class="relative">
                    <img src="/public/img.svg " alt="img of me" width="349" height="418" loading="lazy">
                    <div class="relative top-[-95px] bg-gradient-to-t from-white min-h-24"></div>
                </div>
                <div class="absolute top-[350px] right-[20px] flex p-1 flex-row gap-2 rounded-full border-2 border-black w-82 justify-center" >
                    <a class="font-[20] bg-black rounded-full text-white px-4 py-1" href="/Resume.pdf" download="">Download Resume</a>
                    <NuxtLink class="font-[20] rounded-lg px-4 py-1" to="/about">Contact me</NuxtLink>
                </div>
            </div>
        </div>     
    </div>
</template>

<style>
.main {
    background-image: url("/public/bg.svg");
    background-position: center;
    background-repeat: no-repeat;
}
</style>
