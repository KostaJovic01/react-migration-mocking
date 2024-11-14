type Props = {
  label: string;
  value: string;
  children?: React.ReactNode;
};
const UserDataLabel = (props: Props) => {
  const { label, value } = props;
  return (
    <div className={"flex w-full flex-row items-center space-x-4 lg:w-full"}>
      {props.children}

      <div className={"flex flex-col"}>
        <div>{label}</div>
        <div className={"text-gray-800"}>{value}</div>
      </div>
    </div>
  );
};
export default UserDataLabel;
