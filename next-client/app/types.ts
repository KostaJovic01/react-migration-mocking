import { StaticImageData } from "next/image";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  image?: StaticImageData;
};
