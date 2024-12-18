// src/pages/DashboardPage.tsx
import React, { useContext, useEffect, useState } from "react";
import { JuiceContext } from "../redux/JuiceContext";
import { get } from "../network/ApiConfig";
import { DashboardType } from "../types";
import Cookies from "js-cookie";

const DashboardPage: React.FC = () => {
    const { juices } = useContext(JuiceContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<DashboardType | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await get<{ data: DashboardType }>(
                "/api/admin/dashboard",
                {},
                Cookies.get("kadita-juice-id")
            );
            setData(response.data);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Total Juice</h2>
                    <p className="text-2xl">{data?.juiceCount}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Total Tipe Juice</h2>
                    <p className="text-2xl">{data?.categoryCount}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Total Penjualan</h2>
                    <p className="text-2xl">
                        Rp {juices.reduce((total, juice) => total + juice.harga, 0).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
