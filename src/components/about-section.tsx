
export function AboutSection() {
  return (
   <section className="h-svh text-stone-800 text-center space-y-4 sm:space-y-8 flex flex-col justify-center items-center">
     <p className="text-sm sm:text-lg">i'm Sulthan Yasin</p>
     <p className="text-3xl font-junicode sm:text-6xl">A <span className="text-red-500">UX designer</span> who focused on turning complex product problems into simple, intuitive experiences</p>
     <p className="text-center text-xs sm:text-lg">I love redesigning existing products by uncovering usability issues, improving conversion, and creating interfaces that people genuinely enjoy using. I'm also excited by opportunities to build new products that solve real user needs.</p>
     <SocialLinks/>
     <p className="text-center text-sm text-stone-800 mt-30">Scroll down to learn more about me</p>
    </section>
  )
}

export function SocialLinks() {
  return (
    <div>
      <div className="space-x-4">
        <button className="inline-block px-6 py-2 bg-stone-800 shadow w-fit text-neutral-100 rounded hover:scale-105 transition-all duration-300" onClick={() => window.open('https://www.linkedin.com/in/muhammad-sulthan-yasin-zain-523a32273/')}>Contact me</button>
        <button className="px-6 py-2 bg-stone-200 shadow w-fit text-stone-800 rounded hover:scale-105 transition-all duration-300">View Resume</button>
      </div>
      <a href="/Resume_SulthanYasin.pdf" download="Resume_Muhammad_Sulthan.pdf" className="cursor-pointer inline-block hover:text-stone-500 transition-all duration-300 text-center text-sm text-stone-800 mt-6 underline">Or download the PDF instead.</a>
  </div>
  )
}


export default { AboutSection, SocialLinks }
