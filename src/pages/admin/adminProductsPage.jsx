import { useState } from "react";
import { sampleProducts } from "../../assets/sampleData";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(sampleProducts);

  return (
    <div className="w-full h-full  max-h-full overflow-y-scroll">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Labelled Price</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>COSM24003</td>
            <td>Charcoal Face Mask</td>
            <td>
              <img
                src="https://example.com/images/charcoal_mask.jpg"
                className="w-[50px] h-[50px]"
              />
            </td>
            <td>20</td>
            <td>16.75</td>
            <td>60</td>
          </tr>

          <tr>
            <td>COSM24003</td>
            <td>Charcoal Face Mask</td>
            <td>
              <img
                src="https://example.com/images/charcoal_mask.jpg"
                className="w-[50px] h-[50px]"
              />
            </td>
            <td>20</td>
            <td>16.75</td>
            <td>60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
