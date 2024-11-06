type Props = {
  width?: string;
  height?: string;
};
const EditIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.56 13.56l.88.88L16.878 6 16 5.121zM6.5 17.5h9a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V18a.5.5 0 0 1 .5-.5zm9.146-14.146a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.353.146H6.5a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353z"></path>
    </svg>
  );
};
export default EditIcon;
