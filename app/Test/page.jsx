export default function Test() {
    return (
      <div className="min-h-screen bg-neutral-light text-text-primary p-8 space-y-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary-700 mb-8">
          🎨 Tailwind + Custom Colors Test
        </h1>
  
        {/* Tailwind Base Utility Test */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-secondary-800">
            ⚙️ Tailwind Utility Classes
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800">Padding & Margin</p>
              <div className="mt-2 p-4 bg-gray-100 rounded">.p-4 .mt-2 works!</div>
            </div>
  
            <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800">Flexbox</p>
              <div className="flex gap-2 mt-2">
                <div className="bg-emerald-500 w-8 h-8 rounded" />
                <div className="bg-sky-500 w-8 h-8 rounded" />
                <div className="bg-pink-500 w-8 h-8 rounded" />
              </div>
            </div>
  
            <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800">Typography</p>
              <p className="mt-2 text-sm text-gray-500">Small gray text</p>
              <p className="text-lg font-bold text-gray-900">Bold large text</p>
            </div>
  
            <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800">Buttons</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition">
                  Primary
                </button>
                <button className="bg-secondary-700 hover:bg-secondary-800 text-white px-4 py-2 rounded transition">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Custom Color Palette Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-secondary-800">
            🧩 Custom Color Palette
          </h2>
  
          {/* Primary */}
          <ColorGroup name="Primary" prefix="primary" shades={[50,100,200,300,400,500,600,700,800,900]} />
  
          {/* Secondary */}
          <ColorGroup name="Secondary" prefix="secondary" shades={[50,100,200,300,400,500,600,700,800,900]} />
  
          {/* Accent */}
          <ColorGroup name="Accent" prefix="accent" shades={["success","warning","danger","info"]} />
  
          {/* Neutral */}
          <ColorGroup name="Neutral" prefix="neutral" shades={["white","light","lighter","gray"]} />
  
          {/* Text */}
          <ColorGroup name="Text" prefix="text" shades={["primary","secondary","muted","white"]} />
        </section>
      </div>
    );
  }
  
  /* ---------- Helper Component ---------- */
  function ColorGroup({ name, prefix, shades }) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2 text-secondary-800">{name}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
          {shades.map((shade) => (
            <div
              key={shade}
              className={`flex flex-col items-center justify-center h-20 w-full rounded-lg shadow-sm text-xs sm:text-sm font-medium ${
                typeof shade === "number"
                  ? `bg-${prefix}-${shade} text-white`
                  : `bg-${prefix}-${shade} text-black`
              }`}
            >
              {prefix}-{shade}
            </div>
          ))}
        </div>
      </div>
    );
  }
  