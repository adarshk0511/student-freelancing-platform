import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">FreelanceHub</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/marketplace" className="mx-2">Marketplace</Link>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
