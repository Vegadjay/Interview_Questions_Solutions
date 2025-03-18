import React, { useState } from "react";

const InterestsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Interests" },
        { id: "tech", name: "Technology" },
        { id: "dev", name: "Development" },
        { id: "hobbies", name: "Hobbies" },
        { id: "lifestyle", name: "Lifestyle" }
    ];

    const interestItems = [
        {
            id: 1,
            category: "tech",
            title: "Web Development",
            icon: "💻",
            description: "Creating responsive and interactive web applications.",
            color: "bg-blue-100 text-blue-800"
        },
        {
            id: 2,
            category: "tech",
            title: "Machine Learning",
            icon: "🧠",
            description: "Implementing ML algorithms and neural networks.",
            color: "bg-purple-100 text-purple-800"
        },
        {
            id: 3,
            category: "dev",
            title: "Open Source",
            icon: "🌐",
            description: "Contributing to community projects and learning from others.",
            color: "bg-green-100 text-green-800"
        },
        {
            id: 4,
            category: "hobbies",
            title: "Photography",
            icon: "📷",
            description: "Capturing moments and editing professional photos.",
            color: "bg-yellow-100 text-yellow-800"
        },
        {
            id: 5,
            category: "dev",
            title: "Mobile Apps",
            icon: "📱",
            description: "Building cross-platform applications using React Native.",
            color: "bg-red-100 text-red-800"
        },
        {
            id: 6,
            category: "hobbies",
            title: "Chess",
            icon: "♟️",
            description: "Strategic gameplay and participation.",
            color: "bg-gray-100 text-gray-800"
        }
    ];

    const filteredInterests = selectedCategory === "all"
        ? interestItems
        : interestItems.filter(item => item.category === selectedCategory);

    return (
        <div className="container mx-auto h-[26rem] w-[60rem] max-w-4xl p-8 rounded-2xl shadow-lg bg-white overflow-y-hidden">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800">My Interests</h1>
            </div>

            <div className="flex space-x-2 pb-2 mb-4">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 py-1 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${selectedCategory === category.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Interests Grid - with fixed height container and scrolling */}
            <div className="h-[24rem] overflow-y-auto pr-2">
                <div className="grid grid-cols-2 gap-4">
                    {filteredInterests.map(interest => (
                        <div key={interest.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                            <div className="flex items-start">
                                <div className={`w-10 h-10 ${interest.color} rounded-lg flex items-center justify-center text-xl`}>
                                    {interest.icon}
                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-gray-800">{interest.title}</h3>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${interest.color}`}>
                                            {categories.find(cat => cat.id === interest.category)?.name}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-600">{interest.description}</p>
                                    <div className="mt-2 flex items-center justify-between">
                                        <div className="flex items-center text-gray-500 text-xs">
                                            <span>Related: 12</span>
                                        </div>
                                        <button className="text-blue-500 hover:text-blue-700 transition-colors text-xs font-medium">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show if no interests match filter */}
                {filteredInterests.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-800">No interests found</h3>
                        <p className="text-gray-600 mt-2">Try selecting a different category</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterestsPage;