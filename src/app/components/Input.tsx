import React from "react";

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;
