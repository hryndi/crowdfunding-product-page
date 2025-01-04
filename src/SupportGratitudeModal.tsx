import CheckIcon from "./assets/icon-check.svg";
interface SupportGratitudeModalProps {
  isGratitudeOpen: boolean;
  onClose: () => void;
}

const SupportGratitudeModal = ({ isGratitudeOpen, onClose }: SupportGratitudeModalProps) => {
  return (
    <div
      className={`overflow-scroll fixed inset-0   p-5 flex items-center justify-center ${
        isGratitudeOpen ? "bg-black/20" : "invisible"
      }  z-50  transition-colors`}
    >
      <div className="relative sm:w-8/12  md:w-6/12 lg:w-5/12 text-center  flex gap-5 justify-center flex-col items-center m-auto p-11 py-10 rounded-lg bg-white">
        <img src={CheckIcon} alt="" />
        <h3 className="text-xl font-bold">Thanks for your support!</h3>
        <p className="">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
          email once our campaign is completed.
        </p>
        <button
          onClick={onClose}
          className="bg-primary-moderateCyan text-white rounded-full px-10 py-3 font-semibold hover:bg-primary-darkCyan hover:transition-all hover:duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};
export default SupportGratitudeModal;
