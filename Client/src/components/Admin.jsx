import React from "react";
import AddManufacturer from "./AddManufacturer";

const Admin = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">Admin</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div class="grid grid-cols-1gap-2">
                            <AddManufacturer />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Admin;
