import React from "react";

type Props = {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time";
  id?: string;
  name?: string;
  label: string;
  value: string;
  placeholder?: string;
  readonly?: boolean;
  setValue: (value: string) => void;
};
const FormInput = (props: Props) => {
  const { id, name, label, value, placeholder, setValue } = props;
  return (
    <div id={"INPUT"} className={"flex w-full flex-col space-y-1"}>
      <label
        htmlFor={id ? id : ""}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <input
          onChange={(e) => setValue(e.target.value)}
          readOnly={props.readonly ? props.readonly : false}
          id={id ? id : ""}
          name={name ? name : ""}
          type={props.type ? props.type : "text"}
          placeholder={placeholder ? placeholder : ""}
          value={value}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
        />
      </div>
    </div>
  );
};
export default FormInput;
