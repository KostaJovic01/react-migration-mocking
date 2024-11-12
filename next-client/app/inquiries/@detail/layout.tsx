"use client";
import { useParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  const { id } = useParams();

  return (
    <div
      className={`${id ? "w-full" : "w-0"} absolute left-0 top-0 z-50 h-screen bg-white md:static`}
    >
      {props.children}
    </div>
  );
};
export default Layout;
