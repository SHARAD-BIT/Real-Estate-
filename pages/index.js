import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-100 text-rose-900 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Real Estate Explorer</h1>
      <p className="mb-6 text-lg">Choose a city to explore real estate projects with maps.</p>
      <div className="space-x-4">
        <Link href="/city/Hyderabad" className="bg-rose-500 text-white px-4 py-2 rounded">Hyderabad</Link>
        <Link href="/city/Delhi" className="bg-rose-500 text-white px-4 py-2 rounded">Delhi</Link>
        <Link href="/city/Mumbai" className="bg-rose-500 text-white px-4 py-2 rounded">Mumbai</Link>
        <Link href="/city/Haryana" className="bg-rose-500 text-white px-4 py-2 rounded">Haryana</Link>
      </div>
    </div>
  );
}