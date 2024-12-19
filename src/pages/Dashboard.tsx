import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Breadcrumb from "../components/Layout/Breadcrump";
import DashboardPage from "./DashboardPage";
import JuiceManagementPage from "./JuiceManagementPage";
import { Menu } from "lucide-react";

const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return <DashboardPage />;
            case "juice-management":
                return <JuiceManagementPage />;
            default:
                return <DashboardPage />;
        }
    };

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
        setIsSidebarOpen(false); // Tutup sidebar setelah memilih halaman
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Tombol Menu untuk Mobile */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden absolute top-4 left-4 z-50 bg-blue-500 p-2 rounded"
            >
                <Menu className="text-white" />
            </button>

            {/* Sidebar untuk Desktop dan Mobile */}
            <div
                className={`
          fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
          md:static md:block md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          w-64 bg-gray-800 text-white
        `}
            >
                <Sidebar
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>

            {/* Overlay untuk Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className="flex-1 overflow-y-auto">
                <Breadcrumb currentPage={currentPage} />
                {renderPage()}
            </div>
        </div>
    );
};

export default Dashboard;
