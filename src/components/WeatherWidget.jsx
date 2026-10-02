import { useState, useEffect } from "react";

function WeatherWidget() {
  // 1. Siapkan 'memori' untuk menyimpan data cuaca dan status loading
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. Gunakan useEffect untuk mengambil data saat komponen pertama kali dimuat
  useEffect(() => {
    // Fungsi async untuk memanggil API
    const fetchWeather = async () => {
      try {
        // Endpoint API Open-Meteo untuk koordinat Malang
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-7.98&longitude=112.63&current=temperature_2m,relative_humidity_2m&timezone=Asia%2FJakarta'
        );
        const data = await response.json();
        
        // Simpan hasil respons API ke dalam state
        setWeatherData({
          temp: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
        });
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
        setLoading(false);
      }
    };

    fetchWeather(); // Eksekusi fungsinya
  }, []);
  
    // 3. Render UI berdasarkan status loading dan data cuaca
    return (
    <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg w-fit">
      <div className="flex flex-col">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Malang Radar
        </span>
        {loading ? (
          <span className="text-sm font-mono text-amber-500 animate-pulse">Menyambungkan satelit...</span>
        ) : (
          <div className="flex gap-3 text-sm font-mono text-neutral-200">
            <span>Suhu: <span className="text-amber-500">{weatherData?.temp}°C</span></span>
            <span className="text-neutral-700">|</span>
            <span>Kelembapan: <span className="text-amber-500">{weatherData?.humidity}%</span></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherWidget;