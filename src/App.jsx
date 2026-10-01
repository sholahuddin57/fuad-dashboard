import { useState } from 'react';
import Hero from './components/Hero'; // 1. Kita impor komponennya di sini
import ActivityCard from './components/ActivityCard';

function App() {
  const activitiesData = [
    {
      id: 1,
      category: "Hiking",
      date: "16 Jun 2026",
      title: "Pendakian Gunung Arjuno",
      description: "Eksplorasi jalur pendakian dengan elevasi menantang. Persiapan fisik dan mental diuji sepanjang rute."
    },
    {
      id: 2,
      category: "Running",
      date: "17 Agustus 2026",
      title: "Malang City Run",
      description: "Menyusuri rute urban Malang. Pace stabil dan cuaca mendukung untuk mencetak personal record baru."
    },
    {
      id: 3,
      category: "Coffee",
      date: "07 Sep 2026",
      title: "Kopi Tuku Malang",
      description: "Rehat sejenak menikmati Americano dengan nuansa kafe yang minimalis dan kalcer abis."
    },
    {
      id: 4,
      category: "Cinematography",
      date: "12 Okt 2026",
      title: "Hunting Cinematography Malang",
      description: "Belajar teknik sinematografi landscape dan portrait. Sesi praktik di lokasi outdoor dengan hiruk pikuk Kota Malang."
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(activitiesData.map(activity => activity.category))];
  const filteredActivities = activeFilter === 'All' ? activitiesData : activitiesData.filter(activity => activity.category === activeFilter);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-neutral-900">
      {/* 2. Kita panggil komponennya seperti menulis tag HTML */}
      <Hero />
      
      {/* Nanti kita akan tambahkan komponen lain di bawah sini */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm font-mono tracking-wider transition-all duration-300 border-b-2 ${
              activeFilter === category
                ? 'border-amber-500 text-amber-500'
                : 'border-transparent text-neutral-400 hover:text-amber-500'
            }`}
          >
            {category}
          </button>
        ))}
        </div>
          

        {/*grid layout unutuk hp, tablet, dan desktop*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map(activity => (
            <ActivityCard
              key={activity.id}
              category={activity.category}
              date={activity.date}
              title={activity.title}
              description={activity.description}
            />  
          ))}

        </div>
      </main>
    </div>
  );
}

export default App;