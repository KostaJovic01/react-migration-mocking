"use client";
import DataLabel from "@/app/components/molecules/DataLabel";
import React from "react";
import type { Person } from "@/app/types";

type Props = {
  person: Person;
};
const Person = (props: Props) => {
  return (
    <>
      <div>Contact Information</div>
      <DataLabel
        label={"First Name"}
        value={props.person.givenName ? props.person.givenName : ""}
      />
      <DataLabel
        label={"Last Name"}
        value={props.person.familyName ? props.person.familyName : ""}
      />
      <DataLabel
        value={props.person.gender ? props.person.gender : ""}
        label={"Gender"}
      />
      <DataLabel
        value={props.person.language ? props.person.language : ""}
        label={"Language"}
      />
      <DataLabel
        value={props.person.gender ? props.person.gender : ""}
        label={"Gender"}
      />
      <DataLabel
        value={props.person.email ? props.person.email : ""}
        label={"Email Address"}
      />
      <DataLabel
        value={props.person.newsletter ? props.person.newsletter : "No"}
        label={"Newsletter"}
      />
      <DataLabel
        value={props.person.newsletter ? props.person.newsletter : "No"}
        label={"Catalog"}
      />
    </>
  );
};
export default Person;
