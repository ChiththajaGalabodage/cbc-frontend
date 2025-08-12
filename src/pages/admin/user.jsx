import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { sampleUsers } from "../../assets/sampleData";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminProductsPage() {
  const [users, setUsers] = useState(sampleUsers);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const token = localStorage.getItem("token");

      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/users/gau/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          setUsers(res.data); // ✅ use API response
          setIsLoading(false);
          console.log("API Users Response:", res.data);
        })
        .catch((error) => {
          toast.error("Failed to load users");
          setIsLoading(false);
          console.error("User Fetch Error:", error);
        });
    }
  }, [isLoading]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-center border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[var(--color-accent)] text-white">
          <tr>
            <th className="py-3 px-2">Index</th>
            <th className="py-3 px-2">First Name</th>
            <th className="py-3 px-2">Last Name</th>
            <th className="py-3 px-2">Email</th>
            <th className="py-3 px-2">Image</th>
            <th className="py-3 px-2">Phone</th>
            <th className="py-3 px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(users) ? users : []).map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[var(--color-primary)]" : "bg-gray-100"
              } hover:bg-gray-200 transition`}
            >
              <td className="py-2 px-2">{index + 1}</td>
              <td className="py-2 px-2">{item.firstName}</td>
              <td className="py-2 px-2">{item.lastName}</td>
              <td className="py-2 px-2">{item.email}</td>
              <td className="py-2 px-2">
                <img
                  src={item.img?.[0] || "/default-avatar.png"} // ✅ safe check
                  alt={item.firstName}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="py-2 px-2">{item.phone || "N/A"}</td>
              <td className="py-2 px-2 flex justify-center gap-2">
                <FaEdit className="cursor-pointer text-blue-600" />
                <FaTrash className="cursor-pointer text-red-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
