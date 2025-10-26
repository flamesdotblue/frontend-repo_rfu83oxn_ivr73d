import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />

        <section id="how" className="bg-rose-50/50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Create a request, match with donors, and coordinate safely with verified profiles.
              </p>
            </div>
            <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
              {["Post request", "Match donors", "Donate & track"].map((step, idx) => (
                <li key={step} className="relative rounded-2xl bg-white p-6 text-center ring-1 ring-red-100">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">{step}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {idx === 0 && "Specify blood group, units, urgency, and location."}
                    {idx === 1 && "We surface compatible donors nearby and notify them instantly."}
                    {idx === 2 && "Confirm donation and build your verified history and rewards."}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
