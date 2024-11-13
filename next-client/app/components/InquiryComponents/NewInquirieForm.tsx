import FormField from "@/app/components/FormField";
import React from "react";
import { useInquiriesContext } from "@/app/inquiries/InquiriesContext";
import { useForm } from "react-hook-form";
import { InquirySchema, InquirySchemaData } from "@/app/zod/InquirySchema";
import { zodResolver } from "@hookform/resolvers/zod";

const NewInquirieForm = () => {
  const { handleCreateInquiry } = useInquiriesContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquirySchemaData>({
    resolver: zodResolver(InquirySchema),
  });
  return (
    <>
      <h2 className={"text-2xl"}>Create Inquiry</h2>
      <form onSubmit={handleSubmit((data) => handleCreateInquiry(data))}>
        <FormField
          type={"text"}
          placeholder={"Title"}
          register={register}
          name={"title"}
          error={errors.title}
        />
        <FormField
          type={"text"}
          placeholder={"first name"}
          register={register}
          name={"person.givenName"}
          error={errors.person?.givenName}
        />
        <FormField
          type={"text"}
          placeholder={"last name"}
          register={register}
          name={"person.familyName"}
          error={errors.person?.familyName}
        />
        <FormField
          type={"email"}
          placeholder={"email"}
          register={register}
          name={"person.email"}
          error={errors.person?.email}
        />

        <div className="mt-5 flex flex-row justify-end">
          <button
            type="submit"
            className="w-mas inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};
export default NewInquirieForm;
