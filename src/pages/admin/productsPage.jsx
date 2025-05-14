import { useEffect, useState } from "react";
import { sampleProducts } from "../../assets/sampleData";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(sampleProducts);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full max-h-full overflow-y-scroll relative">
      <Link
        to="/admin/add-product"
        className="absolute text-xl cursor-pointer bottom-5 right-5 bg-green-500 p-2 text-white font-bold py-2 px-4 rounded text-center flex-center items-center"
      >
        +
      </Link>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Labelled Price</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image[0]} className="w-[50px] h-[50px]" />
                </td>
                <td>{item.labelledPrice}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <div className="flex justify-center items-center w-full">
                    <FaTrash className="text-[20px] text-red-500 mx-2 cursor-pointer" />
                    <FaEdit
                      onClick={() => {
                        navigate("/admin/edit-product", {
                          state: item,
                        });
                      }}
                      className="text-[20px] text-blue-500 mx-2 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
