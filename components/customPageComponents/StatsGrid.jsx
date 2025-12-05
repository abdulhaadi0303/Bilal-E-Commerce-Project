export default function StatsGrid({ 
    stats, 
    primaryColor = 'cyan-300', 
    secondaryColor = 'teal-300', 
    textColor = 'cyan-100' 
  }) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-white/20"
          >
            <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-${index % 2 === 0 ? primaryColor : secondaryColor} mb-1 sm:mb-2`}>
              {stat.value}
            </div>
            <div className={`text-xs sm:text-sm md:text-base text-${textColor}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }