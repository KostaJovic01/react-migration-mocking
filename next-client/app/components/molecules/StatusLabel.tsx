import StatusBall from "@/app/components/atoms/StatusBall";

type Props = {
  status: "approved" | "pending" | "error" | undefined;
};
const StatusLabel = (props: Props) => {
  const color = () => {
    switch (props.status) {
      case "pending":
        return "orange";
      case "approved":
        return "green";
      case "error":
        return "red";
      default:
        return "gray";
    }
  };
  return (
    <div className={`flex w-max rounded-md px-2 py-1 bg-${color()}-300`}>
      <div className={"flex flex-row items-center justify-center space-x-1"}>
        <StatusBall status={props.status} />
        <div>{props.status ?? "loading"}</div>
      </div>
    </div>
  );
};
export default StatusLabel;
