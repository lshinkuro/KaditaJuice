// src/components/Layout/Sidebar.tsx
import React from "react";
import { LayoutDashboard, CupSoda, X } from "lucide-react";
import Cookies from "js-cookie";

interface SidebarProps {
    currentPage: string;
    onPageChange: (page: string) => void;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange, onClose }) => {
    return (
        <div className="relative h-full bg-yellow-400">
            {/* Tombol Close untuk Mobile */}
            {onClose && (
                <button onClick={onClose} className="md:hidden absolute top-4 right-4 text-white">
                    <X size={24} />
                </button>
            )}

            <div className="p-4 pt-16 md:pt-4">
                <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
                <nav className="space-y-2">
                    <button
                        onClick={() => onPageChange("dashboard")}
                        className={`w-full flex items-center gap-2 p-2 rounded mb-2 ${
                            currentPage === "dashboard" ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                        }`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </button>
                    <button
                        onClick={() => onPageChange("juice-management")}
                        className={`w-full flex items-center gap-2 p-2 rounded ${
                            currentPage === "juice-management" ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                        }`}
                    >
                        <CupSoda className="w-5 h-5" />
                        Juice Management
                    </button>
                    <button
                        onClick={() => {
                            Cookies.remove("kadita-juice-id");
                            location.reload();
                        }}
                        className={`w-full text-center gap-2 p-2 rounded hover:bg-gray-700`}
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
