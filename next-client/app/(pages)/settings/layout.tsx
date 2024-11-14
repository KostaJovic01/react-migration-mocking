type Props = {
  children?: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <div className={"flex h-screen w-screen flex-col p-6 py-32"}>
      {props.children}
    </div>
  );
};
export default Layout;
