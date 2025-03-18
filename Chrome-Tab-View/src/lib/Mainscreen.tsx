import React, { useState } from 'react'
import Profile from '../pages/Profile'
import InterestsPage from '../pages/Intrest'
import SettingsPage from '../pages/Setting'

const Mainscreen = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [tabs, setTabs] = useState([
        {
            "id": 1,
            "title": "Profile",
            "icon": "👤",
            "component": <Profile />
        },
        {
            "id": 2,
            "title": "Interests",
            "icon": "✨",
            "component": <InterestsPage />
        },
        {
            "id": 3,
            "title": "Settings",
            "icon": "⚙️",
            "component": <SettingsPage />
        }
    ]);

    const changeIndex = (index) => {
        setCurrentPage(index);
    }

    const closeTab = (e, index) => {
        e.stopPropagation();

        const newTabs = [...tabs];
        newTabs.splice(index, 1);

        setTabs(newTabs);

        if (index === currentPage) {
            if (index > 0) {
                setCurrentPage(index - 1);
            } else if (newTabs.length > 0) {
                setCurrentPage(0);
            }
        } else if (index < currentPage) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="container h-[40rem] p-8 w-[65rem] bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl flex flex-col gap-5 shadow-xl">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        JV
                    </div>
                </div>
            </div>

            <div className="tab-container h-14 w-full bg-white rounded-xl flex items-center p-1 gap-2 shadow-md">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => changeIndex(index)}
                        className={`h-full flex-1 flex items-center justify-center gap-2 rounded-lg transition-all relative ${currentPage === index
                            ? "bg-blue-500 text-white font-medium"
                            : "bg-transparent text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <span className="text-lg">{tab.icon}</span>
                        <span className="font-medium">{tab.title}</span>
                        {tabs.length > 1 && (
                            <span
                                onClick={(e) => closeTab(e, index)}
                                className={`absolute top-3 right-1 w-5 h-5 flex items-center justify-center rounded-full text-xs ${currentPage === index
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                                    }`}
                            >
                                ✕
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <div className="container flex-1 w-full rounded-2xl bg-transparent">
                {tabs.length > 0 ? tabs[currentPage].component : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                        <p>No tabs open. Please refresh the page.</p>
                    </div>
                )}
            </div>

            <div className="flex justify-between text-sm text-gray-500 px-2">
                <div>© 2025 Your Dashboard</div>
                <div className="flex space-x-4">
                    <span className="hover:text-blue-500 cursor-pointer">Help</span>
                    <span className="hover:text-blue-500 cursor-pointer">Privacy</span>
                    <span className="hover:text-blue-500 cursor-pointer">Terms</span>
                </div>
            </div>
        </div>
    )
}

export default Mainscreen;