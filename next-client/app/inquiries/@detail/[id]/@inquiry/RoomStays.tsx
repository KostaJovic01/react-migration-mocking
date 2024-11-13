import { RoomStay } from "@/app/types";
import React from "react";

type Props = {
  roomStays: RoomStay[];
};
const RoomStays = (props: Props) => {
  return (
    <table className="min-w-full divide-y divide-gray-300 py-4">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
          >
            Room Number
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {props.roomStays.map((roomStay) => (
          <tr key={roomStay.roomClassificationCode} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {roomStay.roomClassificationCode}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default RoomStays;
