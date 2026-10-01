import { useState } from 'react';
import Hero from './components/Hero'; // 1. Kita impor komponennya di sini
import ActivityCard from './components/ActivityCard';
import DetailModal from './components/DetailModal';

function App() {
  const activitiesData = [
    {
      id: 1,
      category: "Hiking",
      date: "16 Jun 2026",
      title: "Pendakian Gunung Arjuno",
      description: "Eksplorasi jalur pendakian dengan elevasi menantang. Persiapan fisik dan mental diuji sepanjang rute.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126466.86438766442!2d112.51865241029273!3d-7.761019672659039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78809117621c97%3A0xbdc6f4b6559cb31c!2sGn.%20Arjuno!5e0!3m2!1sid!2sid!4v1717395000000",
      gallery: ["https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800&auto=format&fit=crop"]
    },
    {
      id: 2,
      category: "Running",
      date: "17 Agustus 2026",
      title: "Malang City Run",
      description: "Menyusuri rute urban Malang. Pace stabil dan cuaca mendukung untuk mencetak personal record baru.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.289381866475!2d112.62329869999999!3d-7.969016099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628285c50870f%3A0x70a95e25ea946b2f!2sJl.%20Besar%20Ijen%2C%20Kec.%20Klojen%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1790836640521!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></>",
      gallery: ["https://images.unsplash.com/photo-1552674605-15c37059ce21?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"]
    },
    {
      id: 3,
      category: "Coffee",
      date: "07 Sep 2026",
      title: "Kopi Tuku Malang",
      description: "Rehat sejenak menikmati Americano dengan nuansa kafe yang minimalis dan kalcer abis.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.306238083495!2d112.61303997457436!3d-7.967269892057617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883e5723bb84b%3A0xec39d8fc419cfca2!2sToko%20Kopi%20TUKU%20-%20Malang!5e0!3m2!1sid!2sid!4v1790830253019!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></>",
      gallery: ["https://i.pinimg.com/1200x/37/fa/db/37fadb01b6fd57208b5ad7eb13af3555.jpg", "https://i.pinimg.com/736x/27/28/62/27286231f8381cd88524a132b5588284.jpg"]
    },
    {
      id: 4,
      category: "Cinematography",
      date: "12 Okt 2026",
      title: "Hunting Cinematography Malang",
      description: "Belajar teknik sinematografi landscape dan portrait. Sesi praktik di lokasi outdoor dengan hiruk pikuk Kota Malang.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.157990454519!2d112.62823637457454!3d-7.982614492042728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628181bac60c7%3A0xe71f0ef69b3810b4!2sAlun-Alun%20Malang!5e0!3m2!1sid!2sid!4v1790829409257!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></>",
      gallery: ["./images/potraitsholah.JPG", "./images/sholahpotrait2.jpg"]

    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(activitiesData.map(activity => activity.category))];
  const filteredActivities = activeFilter === 'All' ? activitiesData : activitiesData.filter(activity => activity.category === activeFilter);
  const [selectedActivity, setSelectedActivity] = useState(null);

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
              onClick={() => setSelectedActivity(activity)}
            />  
          ))}

        </div>
      </main>

      {selectedActivity && (
        <DetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
}

export default App;