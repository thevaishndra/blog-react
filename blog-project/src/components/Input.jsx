import React, { useId } from "react";

const Input = React.forwardRef(function Input( //allows this Input component to forward its ref to the underlying <input> element
  { label, type = "text", className = "", ...props },
  ref //A reference from the parent component that will be attached to the actual DOM
) {
  const id = useId(); //to generate a unique ID to associate the label with the input field.

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50
      duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
