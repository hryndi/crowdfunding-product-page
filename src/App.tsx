import Modal from "./Modal";
import LogoText from "./assets/logo.svg";
import HamburgerIcon from "./assets/icon-hamburger.svg";
import HamburgerCloseIcon from "./assets/icon-close-menu.svg";
import { useState } from "react";
import MastercraftImg from "./assets/logo-mastercraft.svg";
import BookmarkImg from "./assets/icon-bookmark.svg";
import HeroMobi from "./assets/image-hero-mobile.jpg";
import HeroDesk from "./assets/image-hero-desktop.jpg";
import Card from "./Card";
import SupportGratitudeModal from "./SupportGratitudeModal";

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setIsOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const modalCloseHandler = () => {
    setIsOpen(false);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "auto";
    }
  };
  const modalOpenSupportGratitudeHandler = () => {
    setIsOpen(false);
    setIsSupportModalOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const modalCloseSupportGratitudeHandler = () => {
    setIsSupportModalOpen(false);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      <div className=" hero-img h-auto font-main font-normal bg-gray-100/80">
        <Modal
          isOpen={isOpen}
          onClose={modalCloseHandler}
          openGratitudeModal={modalOpenSupportGratitudeHandler}
        ></Modal>
        <SupportGratitudeModal
          isGratitudeOpen={isSupportModalOpen}
          onClose={modalCloseSupportGratitudeHandler}
        ></SupportGratitudeModal>
        <picture className=" relative h-auto">
          <source type="image/jpeg" srcSet={HeroMobi} media="(max-width: 640px)" />
          <source type="image/jpeg" srcSet={HeroDesk} media="(min-width: 641px)" />
          <img
            src={HeroDesk} // Fallback image
            alt="Hero"
            className="w-full h-auto "
          />
        </picture>

        <header className={`absolute top-0 left-0 ${isBurgerOpen && "bg-black/30 z-[999] h-full"} w-full  `}>
          <div className="px-5  sm:px-16 md:px-28 py-3 flex max-sm:flex-col justify-between">
            <div className="flex justify-between items-center p-3">
              <img src={LogoText} alt="Logo" />

              <div>
                <label>
                  <input
                    type="checkbox"
                    id="menu-toggle"
                    checked={isBurgerOpen}
                    onChange={() => setIsBurgerOpen(!isBurgerOpen)}
                    className="hidden peer input-radio"
                  />
                </label>

                <label htmlFor="menu-toggle" className="sm:hidden">
                  <img src={isBurgerOpen ? HamburgerCloseIcon : HamburgerIcon} alt="" />
                </label>
              </div>
            </div>

            <ul
              className={`${
                isBurgerOpen ? "max-h-[500px]" : "max-h-0 max-sm:py-0"
              } sm:max-h-[500px]  transition-all overflow-hidden duration-300 sm:flex max-sm:bg-white   min-[300px]:w-7/12 sm:w-auto sm:px-5  max-sm:ml-auto text-gray-700 sm:text-white  text-sm rounded-xl`}
            >
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Discover</a>
              </li>
              <li>
                <a href="">Get Started</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="p-5 sm:w-10/12 md:w-9/12 lg:w-7/12 m-auto ">
          <div className="margin-auto relative flex flex-col items-center p-8 pt-14 pb-10 bg-white rounded-lg -mt-16 sm:-mt-28 text-center">
            <img src={MastercraftImg} alt="" className=" absolute top-[-28px]" />
            <h1 className="text-3xl font-bold  ">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-neutral-darkGray  font-medium my-6 ">
              A beautifully & handcraftet monitor stand to reduce neck and eye strain.
            </p>
            <div className="flex items-center flex-wrap gap-4 sm:justify-between max-sm:justify-around w-full sm:px-4">
              <button
                onClick={modalOpenHandler}
                className="p-3 bg-primary-moderateCyan text-white rounded-full max-sm:px-6 px-10 max-[400px]:text-xs   font-semibold hover:bg-primary-darkCyan hover:transition-all hover:duration-300"
              >
                Back this project
              </button>
              <div className="rounded-full h-full flex items-center gap-2 md:pr-2 bg-gray-200  hover:opacity-55">
                <img src={BookmarkImg} alt="" />
                <p className="font-semibold text-gray-500 hidden md:inline-block">Bookmark</p>
              </div>
            </div>
          </div>
          <div className=" px-5 sm:px-10 py-10 rounded-lg bg-white mt-10 ">
            <div className="flex sm:text-nowrap md:w-11/12 max-sm:flex-col justify-center max-sm:items-center numbers-board ">
              <div>
                <span>$89,914</span>
                <p>of $100,000 backed</p>
              </div>

              <div
                style={{
                  borderColor:
                    "linear-gradient(345deg, rgba(122,122,122,0.2497199563419118) 0%, rgba(122,122,122,1) 50%, rgba(122,122,122,0.2497199563419118) 100%);",
                }}
                className="max-sm:border-t-2 max-sm:border-b-2 sm:border-l-2 sm:border-r-2 mx-8 px-8 max-sm:my-8 max-sm:py-8 "
              >
                <span>5,007</span>
                <p>total backers</p>
              </div>

              <div>
                <span>56</span>
                <p>days left</p>
              </div>
            </div>
            <div className="px-2 mt-6">
              <input type="range" className="range-slider bg-primaryGray" min="0" max="100" value="50" />
            </div>
          </div>
          <div className="mt-10 bg-white p-10  rounded-lg">
            <h2 className="text-2xl font-bold ">About this project</h2>
            <p className="my-8 text-neutral-darkGray">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
              comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture
              and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="my-9 text-neutral-darkGray">
              Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to
              allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <div className="flex flex-col gap-6">
              <Card
                onButtonClick={modalOpenHandler}
                addInfo="Pledge $25 or more"
                amount="101"
                head="Bamboo Stand"
                paragrapf="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              />
              <Card
                onButtonClick={modalOpenHandler}
                addInfo="Pledge $75 or more"
                amount="64"
                head="Black Edition Stand"
                paragrapf="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              />
              <Card
                onButtonClick={modalOpenHandler}
                addInfo="Pledge $200 or more"
                amount="2"
                head="Mahogany Special Edition"
                paragrapf="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
