type Props = {
  listSize: number;
};
const CardListLoading = (props: Props) => {
  return (
    <ul className={"w-full space-y-3"}>
      {Array.from({ length: props.listSize }).map((_, index) => (
        <li
          key={index}
          className={
            "animate-shimmer h-[76px] rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] shadow"
          }
        ></li>
      ))}
    </ul>
  );
};
export default CardListLoading;
