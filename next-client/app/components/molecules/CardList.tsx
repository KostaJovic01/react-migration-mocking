import { EnquiriesData, Enquiry } from "@/app/types";

const items = [{ id: 1 }];

type Props = {
  data: EnquiriesData | undefined;
  current?: boolean;
};
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CardList = (props: Props) => {
  return (
    <ul role="list" className="space-y-3">
      {props.data &&
        props.data.enquiries.map((item: Enquiry) => (
          <a
            href={`/inquiries/[${item.id}]`}
            key={item.id}
            className={classNames(
              props.current
                ? "relative text-blue-300 before:absolute before:left-0 before:top-1/4 before:flex before:h-1/2 before:w-1 before:items-center before:justify-center before:rounded-r-full before:bg-blue-300"
                : "",
              "flex h-20 flex-row overflow-hidden rounded-md bg-gray-100 p-4 shadow",
            )}
          >
            <div className={"flex h-5 w-5 items-center justify-center"}>
              <div id={"redDot"} className="h-2 w-2 rounded-full bg-red-700" />
            </div>
            <div id={"listItemData"} className={"flex flex-col"}>
              <div className={"flex flex-row"}>
                {item.person.fullname} - {item.person.email}
              </div>
              <div className={"flex flex-row"}>
                {new Date(item.createdAt).toLocaleString()} - {item.channelName}
              </div>
            </div>
          </a>
        ))}
    </ul>
  );
};
export default CardList;
