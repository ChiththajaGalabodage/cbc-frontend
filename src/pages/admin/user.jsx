import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { sampleUsers } from "../../assets/sampleData";
import toast from "react-hot-toast";
import axios from "axios";
export default function AdminProductsPage() {
  const [products, setUsers] = useState(sampleUsers);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/users")
        .then((res) => {
          setUsers(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          toast.error("Failed to load users");
          setIsLoading(false);
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
          {products.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[var(--color-primary)]" : "bg-gray-100"
              } hover:bg-gray-200 transition`}
            >
              <td className="py-2 px-2">{index}</td>
              <td className="py-2 px-2">{item.firstName}</td>
              <td className="py-2 px-2">{item.lastName}</td>
              <td className="py-2 px-2">{item.email}</td>
              <td className="py-2 px-2">
                <img
                  src={item.img[0]}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>

              <td className="py-2 px-2">{item.phone}</td>
              <td className="py-2 px-2">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
