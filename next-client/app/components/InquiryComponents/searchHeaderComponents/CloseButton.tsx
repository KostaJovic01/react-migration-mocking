import { XMarkIcon } from "@heroicons/react/24/outline";

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-300 p-2.5"
  >
    <XMarkIcon aria-hidden="true" className="min-h-5 min-w-5" />
  </button>
);
export default CloseButton;
