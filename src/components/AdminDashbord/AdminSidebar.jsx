import { Link, useNavigate } from "react-router-dom";
import { FaRegNewspaper, FaPlusSquare, FaHome, FaUsers } from "react-icons/fa";
import { IoExit } from "react-icons/io5";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("loginStatusChanged"));
    navigate("/"); 
  };

  return (
    <div className="w-64 fixed top-0 left-0 h-screen bg-gray-900 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin/blogs" className="flex items-center gap-2 hover:underline">
          <FaRegNewspaper /> All Blogs
        </Link>
        <Link to="/admin/add-blog" className="flex items-center gap-2 hover:underline">
          <FaPlusSquare /> Add Blog
        </Link>
        <Link to="/admin/users" className="flex items-center gap-2 hover:underline">
          <FaUsers/> User List
        </Link>
        <Link to="/" className="flex items-center gap-2 hover:underline">
          <FaHome /> Go Back to Home
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:underline text-left"
        >
          <IoExit /> LogOut
        </button>
      </nav>
    </div>
  );
}