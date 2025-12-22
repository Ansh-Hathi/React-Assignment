function BrowseByDressStyle() {
  return (
    <section className="w-screen px-12 py-20">
      {/* OUTER CONTAINER */}
      <div className="bg-gray-100 rounded-3xl px-12 py-16">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-extrabold text-center mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6">

          {/* CASUAL */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-64">
            <h3 className="absolute top-6 left-6 text-xl font-bold">
              Casual
            </h3>
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              alt="Casual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FORMAL */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-64">
            <h3 className="absolute top-6 left-6 text-xl font-bold">
              Formal
            </h3>
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Formal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* PARTY */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-64">
            <h3 className="absolute top-6 left-6 text-xl font-bold">
              Party
            </h3>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Party"
              className="w-full h-full object-cover"
            />
          </div>

          {/* GYM */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-64">
            <h3 className="absolute top-6 left-6 text-xl font-bold">
              Gym
            </h3>
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
              alt="Gym"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrowseByDressStyle;
