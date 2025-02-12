import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/features/TodoSlice";

const Tabs = () => {
  const tabs = ["All", "Active", "Completed"];
  const selectedTab = useSelector((state: { tasks: { filter: string } }) => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-start">
      <ul className="flex items-center gap-1">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`flex items-center justify-center min-w-[100px] h-[28px] px-2 py-2 border border-gray-300 bg-gray-100 rounded-t-lg cursor-pointer 
            hover:text-green-600 ${
              selectedTab === tab ? "text-green-600 bg-white border-b-0" : ""
            }`}
            onClick={() => dispatch(setFilter(tab))}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
