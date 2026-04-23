import { bikes } from "../../../lib/data";
import Link from "next/link";

export default function BikeDetails({ params }) {
  const bike = bikes.find((item) => item.id === params.id);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Bike not found</h1>
          <p className="text-gray-300 mb-6">The bike you are looking for does not exist.</p>
          <Link href="/" className="px-5 py-3 bg-accent rounded-full text-white">
            Back to showroom
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <img src={bike.image} alt={bike.name} className="w-full rounded-3xl object-cover shadow-2xl" />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{bike.name}</h1>
          <p className="text-accent text-2xl font-semibold">{bike.price}</p>
          <p className="text-gray-300 leading-relaxed">{bike.description}</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-gray-200">
              {bike.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-gray-200">
              Top speed: {bike.topSpeed}
            </span>
          </div>
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">
            Back to bikes
          </Link>
        </div>
      </div>
    </div>
  );
}
