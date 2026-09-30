
import Hero from './components/Hero'; // 1. Kita impor komponennya di sini

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-neutral-900">
      {/* 2. Kita panggil komponennya seperti menulis tag HTML */}
      <Hero />
      
      {/* Nanti kita akan tambahkan komponen lain di bawah sini */}
      <main className="container mx-auto px-4 py-16">
        <p className="text-center text-neutral-600 font-mono">
          [ Area untuk modul rutinitas dan dokumentasi ]
        </p>
      </main>
    </div>
  );
}

export default App;