import { FormFieldProps, ValidFieldNames } from "@/app/types";
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { InquirySchemaData } from "@/app/zod/InquirySchema";

type Props = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<InquirySchemaData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

const FormField = (props: Props) => {
  const { type, placeholder, name, register, error, valueAsNumber } = props;
  return (
    <div className={"flex w-full flex-col space-y-1"}>
      <label className="block text-sm/6 font-medium text-gray-900">
        {placeholder}
      </label>
      <input
        type={type}
        {...register(name, { valueAsNumber })}
        className="block flex-1 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 ring-2 ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
      />
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};
export default FormField;
