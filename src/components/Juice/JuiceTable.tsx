// src/components/Juice/JuiceTable.tsx
import React, { useContext, useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { JuiceContext } from "../../redux/JuiceContext";
import { Juice, Product } from "../../types";
import { get } from '../../network/ApiConfig';

interface JuiceTableProps {
    onEditJuice: (juice: Juice) => void;
}

const JuiceTable: React.FC<JuiceTableProps> = ({ onEditJuice }) => {
    const { juices, hapusJuice } = useContext(JuiceContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await get<{ data: Product[] }>("/api/juices");
            setProducts(response.data);
        } catch (error) {
            setError("Failed to fetch data");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-white shadow-md rounded m-6 mt-0">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-3 text-left">Foto</th>
                        <th className="p-3 text-left">Nama</th>
                        <th className="p-3 text-left">Deskripsi</th>
                        <th className="p-3 text-left">Harga</th>
                        <th className="p-3 text-left">Tipe</th>
                        <th className="p-3 text-left">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">
                                {product.image && (
                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                                )}
                            </td>
                            <td className="p-3">{product.name}</td>
                            <td className="p-3">{product.description}</td>
                            <td className="p-3">Rp {product.price.toLocaleString()}</td>
                            <td className="p-3">{product.category}</td>
                            <td className="p-3 flex gap-2">
                                <button
                                    // onClick={() => onEditJuice(juice)}
                                    className="text-blue-500 hover:text-blue-700"
                                    title="Edit"
                                >
                                    <Edit className="w-5 h-5" />
                                </button>
                                <button
                                    // onClick={() => hapusJuice(juice.id!)}
                                    className="text-red-500 hover:text-red-700"
                                    title="Hapus"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JuiceTable;
