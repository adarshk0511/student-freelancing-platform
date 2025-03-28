import { useState, useEffect } from "react";

const Marketplace = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/gigs/all")
      .then((res) => res.json())
      .then((data) => setGigs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Available Gigs</h2>
      <div className="mt-4 grid gap-4">
        {gigs.length > 0 ? (
          gigs.map((gig) => (
            <div key={gig._id} className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{gig.title}</h3>
              <p className="text-gray-600">{gig.description}</p>
              <p className="text-sm text-blue-600">{gig.category}</p>
              <p className="text-sm font-bold">₹{gig.budget}</p>
              <p className="text-sm text-gray-500">Deadline: {gig.deadline}</p>
              <p className="text-sm text-gray-700">Posted by: {gig.postedBy}</p>
            </div>
          ))
        ) : (
          <p>No gigs available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
