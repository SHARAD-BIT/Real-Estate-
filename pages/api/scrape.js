export default async function handler(req, res) {
  const { city } = req.query;

  const mockProjectsByCity = {
    Hyderabad: [
      {
        name: "Skyline Towers",
        location: "Banjara Hills, Hyderabad",
        price: "₹50L - ₹80L",
        builder: "ABC Developers",
      },
      {
        name: "Green Valley Homes",
        location: "Gachibowli, Hyderabad",
        price: "₹60L - ₹90L",
        builder: "XYZ Builders",
      },
    ],
    Delhi: [
      {
        name: "Capital Heights",
        location: "Connaught Place, Delhi",
        price: "₹75L - ₹1.1Cr",
        builder: "DDA Group",
      },
      {
        name: "Red Fort Residency",
        location: "Chandni Chowk, Delhi",
        price: "₹60L - ₹85L",
        builder: "Heritage Builders",
      },
    ],
    Mumbai: [
      {
        name: "Sea View Apartments",
        location: "Marine Drive, Mumbai",
        price: "₹1Cr - ₹2Cr",
        builder: "Seaside Group",
      },
      {
        name: "Skyline Mumbai",
        location: "Andheri West, Mumbai",
        price: "₹90L - ₹1.5Cr",
        builder: "Metro Builders",
      },
    ],
    Haryana: [
      {
        name: "Green Valley Karnal",
        location: "Sector 4, Karnal, Haryana",
        price: "₹45L - ₹65L",
        builder: "Haryana Estates",
      },
      {
        name: "Ambala Heights",
        location: "Ambala Cantt, Haryana",
        price: "₹50L - ₹75L",
        builder: "Northern Builders",
      },
    ],
  };

  const projects = mockProjectsByCity[city] || [
    {
      name: "Default Residency",
      location: `${city}, India`,
      price: "₹50L - ₹80L",
      builder: "Default Builders",
    },
  ];

  const geocodedProjects = [];

  for (const project of projects) {
    try {
      const response = await fetch(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_API_KEY}&query=${encodeURIComponent(project.location)}`
      );
      const data = await response.json();

      const lat = data?.data?.[0]?.latitude || 0;
      const lng = data?.data?.[0]?.longitude || 0;

      console.log(`${project.name} - ${project.location} => ${lat}, ${lng}`);

      if (lat !== 0 && lng !== 0) {
        geocodedProjects.push({
          ...project,
          coordinates: { lat, lng },
        });
      }
    } catch (err) {
      console.error("Geocoding error:", err);
      // Optional: Push without coordinates, or skip
    }

    await new Promise((resolve) => setTimeout(resolve, 700)); // simulate incremental
  }

  res.status(200).json(geocodedProjects);
}