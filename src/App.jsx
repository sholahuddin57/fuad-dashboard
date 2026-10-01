
import Hero from './components/Hero'; // 1. Kita impor komponennya di sini
import ActivityCard from './components/ActivityCard';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-neutral-900">
      {/* 2. Kita panggil komponennya seperti menulis tag HTML */}
      <Hero />
      
      {/* Nanti kita akan tambahkan komponen lain di bawah sini */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/*grid layout unutuk hp, tablet, dan desktop*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 3. Kita panggil ActivityCard dengan props */}
          <ActivityCard 
            category="Hiking"
            date="16 Jun 2026"
            title="Pendakian Gunung Arjuno"
            description="Eksplorasi jalur pendakian dengan elevasi menantang. Persiapan fisik dan mental diuji sepanjang rute."
          />

          <ActivityCard 
            category="Running"
            date="17 Agustus 2026"
            title="Malang City Run"
            description="Menyusuri rute urban Malang. Pace stabil dan cuaca mendukung untuk mencetak personal record baru."
          />

          <ActivityCard 
            category="Coffee"
            date="07 Sep 2026"
            title="Kopi Tuku Malang"
            description="Rehat sejenak menikmati Americano dengan nuansa kafe yang minimalis dan kalcer abis."
          />

        </div>
      </main>
    </div>
  );
}

export default App;