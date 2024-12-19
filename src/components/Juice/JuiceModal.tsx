import React, { useState, useEffect } from "react";
import { convertFileToBase64 } from "../../utils/fileUtility";
import { Product } from "../../types";
import { post, put } from "../../network/ApiConfig";
import Cookies from "js-cookie";

interface JuiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialJuice?: Product;
}

const JuiceModal: React.FC<JuiceModalProps> = ({ isOpen, onClose, initialJuice }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [juice, setJuice] = useState<Product>({
        id: 0,
        name: "",
        description: "",
        price: 0,
        category: "",
        stringImage: "",
        image: null,
        active: "1",
    });

    useEffect(() => {
        if (initialJuice) {
            setJuice(initialJuice);
        } else {
            setJuice({
                id: 0,
                name: "",
                description: "",
                price: 0,
                category: "",
                stringImage: "",
                image: null,
                active: "1",
            });
        }
    }, [initialJuice, isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setJuice((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setJuice((prev) => ({
            ...prev,
            active: e.target.value,
        }));
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const base64 = await convertFileToBase64(file);
                setJuice((prev) => ({
                    ...prev,
                    image: file,
                    stringImage: base64,
                }));
            } catch (error) {
                console.error("Error converting file:", error);
            }
        }
    };

    const postData = async (product: Product) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("description", product.description);
            formData.append("price", product.price.toString());
            formData.append("category", product.category);
            if (product.image) formData.append("image", product.image);
            formData.append("active", product.active);
            formData.append("quantity", "1000");
            const response = await post<{ data: any }>("/api/juices", formData, Cookies.get("kadita-juice-id"));
            console.log(response);
            alert("Berhasil menambahkan produk!");
            location.reload();
        } catch (error) {
            setError("Failed to fetch data");
            console.error("Error fetching data:", error);
            alert("Gagal menambahkan produk!");
        } finally {
            setLoading(false);
        }
    };

    const putData = async (product: Product) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("description", product.description);
            formData.append("price", product.price.toString());
            formData.append("category", product.category);
            if (product.image instanceof File) {
                formData.append("image", product.image);
            }
            formData.append("active", product.active);
            formData.append("quantity", "1000");
            const response = await put<{ data: any }>(
                "/api/juices/" + product.id,
                formData,
                Cookies.get("kadita-juice-id")
            );
            console.log(response);
            alert("Berhasil mengubah produk!");
            location.reload();
        } catch (error) {
            setError("Failed to fetch data");
            console.error("Error fetching data:", error);
            alert("Gagal mengubah produk!");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (initialJuice) {
            putData(juice);
        } else {
            postData(juice);
        }
        onClose();
    };

    if (!isOpen) return null;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl mb-4">{initialJuice ? "Edit Menu" : "Add Menu"}</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama Juice"
                        value={juice.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Deskripsi"
                        value={juice.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        rows={3}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Harga"
                        value={juice.price}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                    />
                    <select
                        name="active"
                        value={juice.active}
                        onChange={handleActiveChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="0">false</option>
                        <option value="1">true</option>
                    </select>
                    <select
                        name="category"
                        value={juice.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Pilih Tipe Juice</option>
                        <option value="Jus Buah">Juice Buah</option>
                        <option value="Jus Sayur">Juice Sayur</option>
                        <option value="Jus Campuran">Juice Campuran</option>
                    </select>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 border rounded"
                    />
                    {juice.image && (
                        <img src={juice.stringImage} alt="Preview" className="w-32 h-32 object-cover rounded mx-auto" />
                    )}
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
                            Batal
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            disabled={!juice.name || !juice.category || juice.price <= 0}
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JuiceModal;
