
import Hero from './components/Hero'; // 1. Kita impor komponennya di sini

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-neutral-900">
      {/* 2. Kita panggil komponennya seperti menulis tag HTML */}
      <Hero />
      
      {/* Nanti kita akan tambahkan komponen lain di bawah sini */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/*grid layout unutuk hp, tablet, dan desktop*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl h-80 flex items-center justify-center">
            <span className="text-neutral-600 font-mono">Modul Trail (segera hadir)</span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl h-80 flex items-center justify-center">
            <span className="text-neutral-600 font-mono">Modul Run (segera hadir)</span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl h-80 flex items-center justify-center">
            <span className="text-neutral-600 font-mono">Modul Coffee (segera hadir)</span>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;