import React, { useState } from "react";

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState("account");

    const tabs = [
        { id: "account", name: "Account", icon: "👤" },
        { id: "notifications", name: "Notifications", icon: "🔔" },
        { id: "privacy", name: "Privacy", icon: "🔒" },
        { id: "appearance", name: "Appearance", icon: "🎨" },
        { id: "integrations", name: "Integrations", icon: "🔌" }
    ];

    const notificationSettings = [
        { id: "email_updates", label: "Email Updates", description: "Receive weekly digest emails", enabled: true },
        { id: "new_features", label: "New Features", description: "Get notified about platform updates", enabled: true },
        { id: "mentions", label: "Mentions", description: "When someone mentions you in comments", enabled: false },
        { id: "replies", label: "Replies", description: "When someone replies to your posts", enabled: true }
    ];

    const accountSettings = [
        { id: "profile", label: "Profile Information", description: "Update your personal details and photo", icon: "👤" },
        { id: "password", label: "Password", description: "Change your password or set up 2FA", icon: "🔑" },
        { id: "billing", label: "Billing & Subscription", description: "Manage your subscription and payment methods", icon: "💳" },
        { id: "data", label: "Data & Export", description: "Export your data or customize usage", icon: "📤" }
    ];

    const privacySettings = [
        { id: "visibility", label: "Profile Visibility", description: "Control who can see your profile", icon: "👁️" },
        { id: "data_sharing", label: "Data Sharing", description: "Manage how your data is used", icon: "📊" },
        { id: "blocked", label: "Blocked Users", description: "Manage your blocked users list", icon: "🚫" }
    ];

    const appearanceSettings = [
        { id: "theme", label: "Theme", description: "Light, dark, or system preference", icon: "🌓" },
        { id: "density", label: "Density", description: "Compact or comfortable view", icon: "📋" },
        { id: "font_size", label: "Font Size", description: "Adjust text size across the app", icon: "🔤" }
    ];

    const integrationSettings = [
        { id: "google", label: "Google", description: "Connect your Google account", connected: true, icon: "G" },
        { id: "github", label: "GitHub", description: "Link your GitHub repositories", connected: false, icon: "GH" },
        { id: "slack", label: "Slack", description: "Enable Slack notifications", connected: false, icon: "S" }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case "account":
                return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                        <div className="space-y-3">
                            {accountSettings.map(item => (
                                <div key={item.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-base font-semibold text-gray-800">{item.label}</h3>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                        </div>
                                        <button className="ml-2 text-blue-500 hover:text-blue-700 font-medium">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "notifications":
                return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
                        <div className="space-y-3">
                            {notificationSettings.map(item => (
                                <div key={item.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-base font-semibold text-gray-800">{item.label}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "privacy":
                return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
                        <div className="space-y-3">
                            {privacySettings.map(item => (
                                <div key={item.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-base font-semibold text-gray-800">{item.label}</h3>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                        </div>
                                        <button className="ml-2 text-blue-500 hover:text-blue-700 font-medium">
                                            Configure
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "appearance":
                return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Appearance Settings</h2>
                        <div className="space-y-3">
                            {appearanceSettings.map(item => (
                                <div key={item.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-yellow-100 text-yellow-800 rounded-lg flex items-center justify-center text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-base font-semibold text-gray-800">{item.label}</h3>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                        </div>
                                        <div className="ml-2">
                                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "integrations":
                return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Connected Services</h2>
                        <div className="space-y-3">
                            {integrationSettings.map(item => (
                                <div key={item.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center text-sm font-bold">
                                            {item.icon}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-base font-semibold text-gray-800">{item.label}</h3>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.connected ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                                                    {item.connected ? "Connected" : "Not Connected"}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                        </div>
                                        <button className={`ml-2 px-3 py-1 rounded text-sm font-medium ${item.connected ? "text-red-500 hover:text-red-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
                                            {item.connected ? "Disconnect" : "Connect"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto h-[22rem] overflow-x-hidden max-w-4xl border border-gray-200 p-8 rounded-xl shadow-lg bg-white">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                <button className="px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition">
                    Save Changes
                </button>
            </div>

            <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b border-gray-200">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1 text-sm font-medium rounded-lg whitespace-nowrap transition-all flex items-center ${activeTab === tab.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        <span className="mr-1">{tab.icon}</span> {tab.name}
                    </button>
                ))}
            </div>

            <div className="overflow-y-auto pr-2">
                {renderTabContent()}
            </div>

            <div className="mt-8 flex justify-between pt-4 border-t border-gray-200">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium">
                    Reset to Default
                </button>
                <div className="space-x-2">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
                        Apply Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;