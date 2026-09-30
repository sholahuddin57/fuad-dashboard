
function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-center border-b border-neutral-800">
      {/* Efek noise/grain analog tipis */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none"></div>
      
      <div className="z-10 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700 tracking-tighter">
          FUAD DASHBOARD
        </h1>
        <p className="text-neutral-400 font-mono text-sm md:text-base uppercase tracking-[0.3em]">
          Software Engineering • Analog Aesthetics • Exploration
        </p>
      </div>
    </section>
  );
}

export default Hero;