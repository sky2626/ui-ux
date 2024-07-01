<template>
    <!--profile section and social media-->
    <div>
        <div class="flex justify-center flex-col items-center gap-[24px] h-[500px] bg-gray-300 mt-4">
            <div class="bg-[#D4C3EF] rounded-full h-[298px] w-[298px] flex justify-center items-center flex-col gap-8">
                <div class="[h-200px] w-[200px]">
                    <img src="/public/profile.png" 
                    class="rounded-full "
                    height="200" width="200" alt="profile img">
                </div>
            </div>
            <div class="flex flex-row gap-6">
                <a href="https://www.linkedin.com/in/salu-alhassan-7112841b1/"
                class="hover:text-[#9747FF]">
                    <IconsLinkedin />
                </a>
                <a href="https://dribbble.com/Ma_Guy"
                class="hover:text-[#9747FF]">
                    <IconsDribble />
                </a>
                <a href="https://www.behance.net/alhassansalu"
                class="hover:text-[#9747FF]">
                    <IconsBehance />
                </a>
                <a href="https://www.linkedin.com/in/salu-alhassan-7112841b1/"
                class="hover:text-[#9747FF]">
                    <img src="/public/x-social-media-logo-icon.svg" alt="x image" height="24" width="24">
                </a>
            </div>
        </div>
    </div>

    <!-- about section-->
    <div class="flex flex-col md:flex-row gap-[24px] justify-center my-36 mx-[18px]">
        <div class="flex justify-center md:justify-start">
            <img src="/public/img.svg" alt="">
        </div>
        <div class="flex gap-4 flex-col">
            <h3 class="font-semibold">- Discover</h3>
            <h1 class="font-bold text-xl">About Me</h1>
            <p class="max-w-[600px]">UI/UX designer that possesses a solid combination of hard and soft skills. proficient in using industry-
standard design tools to create interfaces that are both aesthetically pleasing and user-friendly. Skilled at
conducting user research, creating wireframes, creating prototypes, and ensuring accessibility. Effective
communicator and team player with strong analytical and problem-solving abilities. passionate about
merging creativity with data-driven decisions to provide exceptional user experiences.</p>
            <div class="flex flex-row gap-8 max-w-[600px] rounded-xl font-semibold border-2 border-black p-4">
                <div class="font-semibold">
                    <p>Name: <span> Salu Alhassan</span></p>
                    <p>Phone: <a href="tel:+233546383716">+233546383716</a></p>
                    <p>Experience: <Span>2 years</Span></p>
                </div>
                <div class="">
                    <p>Avalability: <span>Ready to work</span></p>
                    <p class="flex flex-row">Address: <Address> Kumasi, Ghana</Address></p>
                    <p>Experience: <Span>2 years</Span></p>
                </div>
            </div>
            <a href="/Resume.pdf" download="" 
            class="p-4 bg-[#9747FF] md:w-[250px] max-w-[600px] flex items-center justify-center text-center text-white hover:bg-[#D4C3EF] rounded-xl items-center flex gap-[8px] font-bold text-xl">
            <IconsDownload />
            Download Resume</a>
        </div>
    </div>

    <!--services section-->
    <div class="flex justify-center mb-36">
        <div class="flex gap-[16px] flex-col justofy-center">
            <h3 class="font-semibold text-center">- What I do</h3>
            <h1 class="font-bold text-xl">My Services</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 max-w-[900px] gap-[16px] mx-[16px]">
                <div class="font-semibold md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                    <IconsDesign />
                    <p>Creative Design</p>
                </div>
                <div class="font-semibold w-[450px] md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                    <IconsBranding />
                    <p>Branding</p>
                </div>
                <div class="font-semibold md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                    <IconsUser />
                    <p>User Interface</p>
                </div>
                <div class="font-semibold md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                    <IconsGraphic />
                    <p>Graphic Design</p>
                </div>
                <div class="font-semibold md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                    <IconsLogo />
                    <p>Logo</p>
                </div>
                <div class="font-semibold md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                    <IconsMotion />
                    <p>Motion design</p>
                </div>
            </div>
        </div>
    </div>
    <!--Technology section-->
    <div class="flex justify-center my-24">
        <div class="flex flex-col gap-[16px]">
            <h3 class="font-semibold text-center">- Technologies</h3>
            <h1 class="font-bold text-xl">What I can work with</h1>
            <div class="flex flex-col justify-center">
                <div class="flex flex-col gap-[16px]">
                    <p class="font-bold text-lg">Communication</p>
                    <div class="grid gap-[16px] place-items-center grid-cols-2 md:grid-cols-6 max-w-[200px] md:max-w-[650px]">
                        <div class="font-semibold flex flex-col justify-center items-center w-[100px] border-2 border-black rounded-xl p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <IconsSlack />
                            <p>Slack</p>
                        </div>
                        <div class="font-semibold flex flex-col justify-center items-center w-[100px] border-2 border-black rounded-xl p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <IconsDiscord />
                            <p>Discord</p>
                        </div>
                        <div class="font-semibold flex flex-col justify-center items-center w-[100px] border-2 border-black rounded-xl p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <IconsSlack />
                            <p>G Meet</p>
                        </div>
                        <div class="font-semibold flex flex-col justify-center items-center w-[100px] border-2 border-black rounded-xl p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <IconsSlack />
                            <p>Zoom</p>
                        </div>
                        <div class="font-semibold flex flex-col justify-center items-center w-[100px] border-2 border-black rounded-xl p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <IconsSlack />
                            <p>MS Meet</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-[16px] max-w-[900px]">
                    <p class="font-bold text-lg">Design</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-[16px] px-[16px] mx-[16px]">
                        <div class="font-bold text-3xl flex flex-row items-center md:w-[250px] md:h-[160px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <div><img src="/public/figma.png" alt="figma-img" height="250" width="250" loading="lazy"> </div>
                            <p>Figma</p>
                        </div>
                        <div class="font-bold text-3xl flex flex-row items-center md:h-[160px] md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <div><img src="/public/webflow.png" alt="figma-img" height="250" width="250" loading="lazy"> </div>
                            <p>Webflow</p>
                        </div>
                        <div class="font-bold text-3xl flex flex-row items-center md:h-[160px] md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <div><img src="/public/figma.png" alt="figma-img" height="250" width="250" loading="lazy"> </div>
                            <p>Figma</p>
                        </div>
                        <div class="font-bold text-3xl flex flex-row items-center md:h-[160px] md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <div><img src="/public/figma.png" alt="figma-img" height="250" width="250" loading="lazy"> </div>
                            <p>Figma</p>
                        </div>
                        <div class="font-bold text-3xl flex flex-row items-center md:h-[160px] md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <div><img src="/public/figma.png" alt="figma-img" height="250" width="250" loading="lazy"> </div>
                            <p>Figma</p>
                        </div>
                        <div class="font-bold text-3xl flex flex-row items-center md:h-[160px] md:w-[250px] border-2 border-black rounded-lg p-[8px] hover:bg-black hover:text-white gap-[8px]">
                            <div><img src="/public/figma.png" alt="figma-img" height="250" width="250" loading="lazy"> </div>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
