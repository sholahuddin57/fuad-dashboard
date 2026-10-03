import { motion } from 'framer-motion';

function DetailModal({ activity, onClose }) {
  if (!activity) return null;

  return (
    // Latar belakang hitam transparan dengan efek blur (neo-noir vibe)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        
        {/* Header Modal */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-amber-500">{activity.title}</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white font-mono text-xl">
            [X]
          </button>
        </div>

        {/* Konten Peta & Galeri */}
        <div className="p-6 space-y-8">
          {activity.mapUrl ? (
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-neutral-800">
              <iframe src={activity.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          ) : (
            <div className="w-full h-32 flex items-center justify-center bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-600 font-mono">Map belum tersedia</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activity.gallery?.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg border border-neutral-800">
                <img src={img} alt="Analog Moment" className="w-full aspect-3/4 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default DetailModal;