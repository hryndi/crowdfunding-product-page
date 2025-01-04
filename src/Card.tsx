interface CardProps {
  head: string;
  paragrapf: string;
  addInfo: string;
  amount: string;
  disabled?: boolean;
  onButtonClick: () => void;
}

const Card = ({ head, paragrapf, addInfo, amount, disabled, onButtonClick }: CardProps) => {
  return (
    <div className={` ${disabled && "opacity-60"} border-2 border-solid border-opacity-50 p-6 sm:p-9 rounded-xl`}>
      <div className="flex max-sm:flex-col gap-1 justify-between">
        <h3 className="text-xl font-bold ">{head}</h3>
        <span className="text-primary-moderateCyan font-medium text-xl ">{addInfo}</span>
      </div>
      <p className="my-8">{paragrapf}</p>
      <div className="justify-between sm:flex items-center">
        <div className="flex gap-3 items-center my-6">
          <span className="text-3xl font-bold">{amount}</span>
          <p className="text-xl">left</p>
        </div>
        <button
          onClick={onButtonClick}
          className={`${
            disabled
              ? "bg-gray-400"
              : "bg-primary-moderateCyan hover:bg-primary-darkCyan hover:transition-all hover:duration-300"
          }   font-semibold  text-white px-10 py-3.5 rounded-full `}
        >
          {disabled ? "Out of Stock" : "Select Reward"}
        </button>
      </div>
    </div>
  );
};

export default Card;
