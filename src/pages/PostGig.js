import { useState } from "react";

const PostGig = () => {
  const [gig, setGig] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gig Submitted:", gig);
    alert("Gig Posted Successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Post a New Gig</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Gig Title"
          className="border p-2 w-full my-2"
          onChange={(e) => setGig({ ...gig, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full my-2"
          onChange={(e) => setGig({ ...gig, description: e.target.value })}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Budget (₹)"
          className="border p-2 w-full my-2"
          onChange={(e) => setGig({ ...gig, budget: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Post Gig
        </button>
      </form>
    </div>
  );
};

export default PostGig;
