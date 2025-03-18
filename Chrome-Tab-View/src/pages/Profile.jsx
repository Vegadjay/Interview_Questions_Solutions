import React from "react";

const Profile = () => {
    return (
        <div className="container mx-auto h-full max-w-4xl border border-gray-200 p-8 rounded-xl shadow-lg bg-white">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="relative">
                    <div className="h-36 w-36 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl shadow-md">
                        🧑‍💻
                    </div>
                    <div className="absolute bottom-0 right-0 bg-green-500 h-5 w-5 rounded-full border-2 border-white"></div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Jay Vegad</h2>
                            <p className="text-gray-600">MERN Stack Developer | Open Source Contributor</p>
                        </div>

                        <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition shadow-md flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit Profile
                        </button>
                    </div>

                    <div className="flex space-x-8 mt-6 pb-6 border-b border-gray-200">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">120</h3>
                            <p className="text-gray-500 text-sm">Posts</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">5.6K</h3>
                            <p className="text-gray-500 text-sm">Followers</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">120</h3>
                            <p className="text-gray-500 text-sm">Following</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    About Me
                </h3>
                <p className="mt-2 text-gray-600 bg-gray-50 p-4 rounded-lg">
                    Passionate developer, building scalable web apps with React & Next.js. Open to collaborations & GSoC projects. 🚀
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Express</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Next.js</span>
            </div>
        </div>
    );
};

export default Profile;