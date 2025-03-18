import { CircleX } from "lucide-react";
import React, { useState } from "react";

const Tab = ({ title }) => {
    const [tabTitle, setTabTitle] = useState(title);

    const truncateTitle = (title, maxLength = 12) => {
        if (!title) return "";
        return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
    };

    return (
        <>
            <div className="h-10 w-64 bg-red-200 p-4 flex justify-between items-center rounded-xl">
                <div className="h-7 w-7 bg-green-700 rounded-full"></div>

                <div className="title text-black overflow-hidden text-lg font-bold">
                    {truncateTitle(tabTitle)}
                </div>

                <div className="icon">
                    <CircleX className="text-black cursor-pointer" />
                </div>
            </div>
        </>
    );
};

export default Tab;
