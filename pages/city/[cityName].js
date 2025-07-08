import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ProjectMap = dynamic(() => import('../../components/ProjectMap'), { ssr: false });

export default function CityPage() {
  const router = useRouter();
  const { cityName } = router.query;

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || !cityName) return;

    fetch(`/api/scrape?city=${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setLoading(false);
      });
  }, [router.isReady, cityName]);

  return (
    <>
      {/* Project Cards Container */}
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-rose-900 text-center">
          Projects in {cityName}
        </h1>

        {loading ? (
          <p className="text-gray-500 text-lg">Loading projects...</p>
        ) : (
          <>
            <ul className="space-y-6 text-center">
              {projects.map((project, i) => (
                <li key={i} className="border rounded-lg p-4 shadow-md bg-pink-200">
                  <h2 className="text-xl font-semibold text-rose-900">{project.name}</h2>
                  <p className="text-gray-900">📍 <strong>Location:</strong> {project.location}</p>
                  <p className="text-gray-900">💰 <strong>Price:</strong> {project.price}</p>
                  <p className="text-gray-900">🏗️ <strong>Builder:</strong> {project.builder}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Full-Width Map Container */}
      {!loading && projects.length > 0 && (
        <div className="w-full mt-10 px-0">
          <h2 className="text-2xl font-semibold mb-4 text-center  text-rose-900">
            Project Locations on Map
          </h2>
          <div className="w-full  shadow-lg border border-gray-900">
            <ProjectMap projects={projects} />
          </div>
        </div>
      )}
    </>
  );
}