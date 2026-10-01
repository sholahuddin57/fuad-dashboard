function ActivityCard({ title, category, date, description, onClick }) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors duration-300 group">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-1 rounded">
                    {category}
                    </span>

                    <span className="text-xs text-neutral-500 font-mono">
                        {date}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-200 mb-2 group-hover:text-amber-400 transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800">
                <button onClick={onClick} className="text-sm font-mono text-neutral-500 hover:text-amber-500 transition-colors flex items-center gap-2">
                    <span>Lihat Detail</span>
                </button>
            </div>
        </div>
    );
}

export default ActivityCard;