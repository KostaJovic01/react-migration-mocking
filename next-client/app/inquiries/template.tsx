type Props = {
  children?: React.ReactNode;
};
const Template = (props: Props) => {
  return (
    <div className={"flex h-screen flex-col p-6 py-32"}>{props.children}</div>
  );
};
export default Template;
