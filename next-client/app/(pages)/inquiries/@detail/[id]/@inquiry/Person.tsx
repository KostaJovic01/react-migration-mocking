"use client";
import DataLabel from "@/app/(pages)/inquiries/@detail/[id]/@inquiry/DataLabel";
import React from "react";
import type { Person } from "@/app/types";

type Props = {
  person: Person;
};
const Person = (props: Props) => {
  return (
    <>
      <div>Contact Information</div>
      <DataLabel label={"First Name"} value={props.person.givenName ?? ""} />
      <DataLabel label={"Last Name"} value={props.person.familyName ?? ""} />
      <DataLabel label={"Gender"} value={props.person.gender ?? ""} />
      <DataLabel label={"Language"} value={props.person.language ?? ""} />
      <DataLabel label={"Gender"} value={props.person.gender ?? ""} />
      <DataLabel label={"Email Address"} value={props.person.email ?? ""} />
      <DataLabel label={"Newsletter"} value={props.person.newsletter ?? "No"} />
      <DataLabel label={"Catalog"} value={props.person.newsletter ?? "No"} />
    </>
  );
};
export default Person;
