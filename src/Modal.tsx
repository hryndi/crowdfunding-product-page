import { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  openGratitudeModal: () => void;
  //   children: React.ReactNode;
}

const Modal = ({ onClose, isOpen, openGratitudeModal }: ModalProps) => {
  const [radioVal, setRadioVal] = useState("");
  useEffect(() => {
    console.log(radioVal);
  });
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      className={` overflow-scroll fixed inset-0  inline p-5  ${
        isOpen ? "bg-black/20" : "invisible"
      }  z-50  transition-colors`}
    >
      <div onClick={(e) => e.stopPropagation()} className="relative sm:w-9/12 m-auto p-5 py-10 rounded-lg bg-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-center  rounded-full w-8 h-8 leading-none text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          x
        </button>
        <h2 className="py-4 text-2xl font-bold">Back this Project</h2>

        <p className="my-8">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        {/* -------------------------------------------- */}
        <div className="modal-cards">
          <div
            onClick={() => setRadioVal("option1")}
            className={`bg-primaryGray cursor-pointer border-2 rounded-lg relative overflow-hidden  ${
              radioVal === "option1" && "border-primary-moderateCyan"
            }`}
          >
            <div className="p-6 ">
              <div className=" flex items-center my-5 gap-3 bullet-input">
                <input
                  className=" radio-input"
                  type="radio"
                  value="option1"
                  name="radio-picker"
                  checked={radioVal === "option1"}
                />

                <h3 className="">Pledge with no reward</h3>
              </div>

              <p className="my-5 ">
                Choose to support us without a reward if you simply believe in our project. As a backer, you will be
                signed up to receive product updates via email.
              </p>
            </div>

            <div
              className={` border-primaryGray overflow-hidden transition-all duration-1000  max-h-0 ${
                radioVal === "option1" && "max-h-[300px] border-t-2"
              } `}
            >
              <div className="flex sm:justify-between sm:items-center max-sm:flex-col max-sm:items-center gap-4 m-5  ">
                <p>Enter your Pledge</p>
                <div className="flex justify-center gap-5 flex-wrap">
                  <div className="relative">
                    <input
                      type="text"
                      className="pl-7 pr-4 py-2 border-2 rounded-full h-full max-w-24"
                      //   placeholder="Enter your email"
                      style={{
                        borderColor: `linear-gradient(to right, hsl(174, 86%, 45%) 80%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)`,
                      }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                    >
                      <p>$</p>
                    </div>
                  </div>
                  <button
                    onClick={openGratitudeModal}
                    className=" rounded-full text-white bg-primary-moderateCyan py-3 px-4"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div
            className={`mt-6 cursor-pointer border-2 rounded-lg relative overflow-hidden bg-primaryGray ${
              radioVal === "option2" && "border-primary-moderateCyan"
            }`}
            onClick={() => setRadioVal("option2")}
          >
            <div className="p-6  flex sm:flex-row sm:flex-wrap sm:justify-between  flex-col">
              <div className=" sm:order-1 flex items-center mt-5 bullet-input">
                <input
                  className="m-3 ml-0 radio-input"
                  type="radio"
                  value="option2"
                  name="radio-picker"
                  checked={radioVal === "option2"}
                />
                <div className="flex flex-col ">
                  <h3 className="">Bamboo stand</h3>
                  <span className="text-primary-moderateCyan font-semibold">Pledge $25 or more</span>
                </div>
              </div>

              <p className="my-5 sm:order-3">
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you'll be added to a special Backer member list.
              </p>
              <div className="flex gap-2 sm:order-2 items-center ">
                <span className="text-xl !font-bold">101</span>
                <p className="text-base ">left</p>
              </div>
            </div>

            <div
              className={` border-primaryGray overflow-hidden  max-h-0 transition-all duration-1000 ${
                radioVal === "option2" && "max-h-[300px] border-t-2"
              } `}
            >
              <div className="flex max-sm:flex-col sm:justify-between sm:items-center max-sm:items-center gap-4 m-5  ">
                <p>Enter your Pledge</p>
                <div className="flex justify-center gap-5 flex-wrap">
                  <div className="relative">
                    <input
                      type="text"
                      className="pl-7 pr-4 py-2 border-2 rounded-full h-full max-w-24 bg-primaryGray"
                      //   placeholder="Enter your email"
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                    >
                      <p>$</p>
                    </div>
                  </div>
                  <button
                    onClick={openGratitudeModal}
                    className=" rounded-full text-white bg-primary-moderateCyan py-3 px-4"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div
            className={`mt-6 cursor-pointer border-2 rounded-lg relative overflow-hidden bg-primaryGray ${
              radioVal === "option3" && "border-primary-moderateCyan"
            }`}
            onClick={() => setRadioVal("option3")}
          >
            <div className="p-6 flex sm:flex-row sm:flex-wrap sm:justify-between  flex-col">
              <div className=" sm:order-1 flex items-center mt-5 bullet-input">
                <input
                  className="m-3 ml-0 radio-input"
                  type="radio"
                  value="option3"
                  name="radio-picker"
                  checked={radioVal === "option3"}
                />
                <div className="flex  flex-col ">
                  <h3 className="">Black Edition Stand</h3>
                  <span className="text-primary-moderateCyan font-semibold">Pledge 75$ or more</span>
                </div>
              </div>

              <p className="my-5 sm:order-3">
                You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer
                member list. Shipping is included.
              </p>
              <div className="flex gap-2 sm:order-2  items-center ">
                <span className="text-xl !font-bold">64</span>
                <p className="text-base ">left</p>
              </div>
            </div>

            <div
              className={` border-primaryGray overflow-hidden transition-all duration-1000 ${
                radioVal === "option3" ? "max-h-[300px] border-t-2" : "max-h-0"
              } `}
            >
              <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between sm:items-center gap-4 m-5  ">
                <p>Enter your Pledge</p>
                <div className="flex justify-center gap-5 flex-wrap">
                  <div className="relative">
                    <input
                      type="text"
                      className="pl-7 pr-4 py-2 border-2 rounded-full h-full max-w-24 bg-primaryGray"
                      //   placeholder="Enter your email"
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                    >
                      <p>$</p>
                    </div>
                  </div>
                  <button
                    onClick={openGratitudeModal}
                    className=" rounded-full text-white bg-primary-moderateCyan py-3 px-4"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div
            className={`mt-6 border-2 cursor-pointer rounded-lg relative overflow-hidden bg-primaryGray pointer-events-none opacity-55
                 ${radioVal === "option4" && "border-primary-moderateCyan"}
              
            `}
            onClick={() => setRadioVal("option4")}
          >
            <div className="p-6 flex sm:flex-row sm:flex-wrap sm:justify-between  flex-col">
              <div className=" flex sm:order-1 items-center mt-5 bullet-input">
                <input
                  className="m-3 ml-0 radio-input"
                  type="radio"
                  value="option4"
                  name="radio-picker"
                  checked={radioVal === "option4"}
                />
                <div className="flex flex-col ">
                  <h3 className="">Mahogany Special Edition</h3>
                  <span className="text-primary-moderateCyan font-semibold">Pledge 200$ or more</span>
                </div>
              </div>

              <p className="my-5 sm:order-3">
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added
                to Our Backer member list. Shipping is included.
              </p>
              <div className="flex gap-2 sm:order-2 items-center ">
                <span className="text-xl !font-bold">1</span>
                <p className="text-base ">left</p>
              </div>
            </div>

            <div
              className={` border-primaryGray overflow-hidden transition-all  max-h-0 ${
                radioVal === "option4" && "max-h-[300px] border-t-2"
              } `}
            >
              <div className="flex max-sm:flex-col max-sm:items-center gap-4 m-5  ">
                <p>Enter your Pledge</p>
                <div className="flex justify-center gap-5 flex-wrap">
                  <div className="relative">
                    <input
                      type="text"
                      className="pl-7 pr-4 py-2 border-2 rounded-full h-full max-w-24 bg-primaryGray"
                      //   placeholder="Enter your email"
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                    >
                      <p>$</p>
                    </div>
                  </div>
                  <button onClick={openGratitudeModal} className=" rounded-full text-white bg-gray-500 py-3 px-4">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
