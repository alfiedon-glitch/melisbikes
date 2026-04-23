import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { BikeCard } from "../components/BikeCard";
import { AIChat } from "../components/AIChat";
import { bikes } from "../lib/data";

export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <section id="bikes" className="p-10 max-w-6xl mx-auto pt-32">
          <h2 className="text-3xl font-bold mb-8">Our Collection</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {bikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        </section>

        <section id="assistant" className="p-10 max-w-6xl mx-auto">
          <AIChat />
        </section>

        <section id="about" className="p-10 max-w-6xl mx-auto">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-bold mb-4">About Melis Bikes</h2>
            <p className="text-gray-300 leading-relaxed">
              Melis Bikes is a premium motorcycle showcase designed for riders who appreciate bold styling, advanced performance, and unforgettable experiences.
              Every bike in our collection is curated with craftsmanship, speed, and luxury in mind.
            </p>
          </div>
        </section>

        <section id="contact" className="p-10 max-w-6xl mx-auto pb-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Have questions about our bikes or want a custom consultation? Reach out to our team and we&apos;ll help you find the perfect ride.
            </p>
            <div className="space-y-3 text-gray-200">
              <div>
                <span className="font-semibold">Email:</span> hello@melisbikes.com
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </div>
              <div>
                <span className="font-semibold">Location:</span> 742 Premium Avenue, Motor City
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
