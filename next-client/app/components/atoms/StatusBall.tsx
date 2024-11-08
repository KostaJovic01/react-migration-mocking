type Props = {
  status: "approved" | "pending" | "error" | undefined;
};

const StatusBall = (props: Props) => {
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
    <div
      id={"status ball"}
      className={`h-2 w-2 rounded-full bg-${color()}-500`}
    />
  );
};

export default StatusBall;
