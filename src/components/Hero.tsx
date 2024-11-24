export default function Hero() {
  return (
    <div className="bg-purple-600 min-h-[70vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-32">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-5xl font-bold mb-4">Gebeya</h1>
            <p className="text-white text-lg mb-4">
              Discover a world of convenience with our user-friendly platform, curated collections, and exceptional customer service
            </p>
            <h2 className="text-white text-5xl font-bold">SHOP</h2>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute -left-20 top-0">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800"
                alt="Fashion"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
            <div className="absolute left-20 bottom-0">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
                alt="Shoes"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800"
                alt="Accessories"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold mt-6 hover:bg-orange-600 transition-colors">
          Explore Now
        </button>
      </div>
    </div>
  );
}