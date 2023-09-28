//?       [VE] -> Virtual Engine
import { task } from "nanostores";
import { useStore } from "@nanostores/react";
import React from "react";
import { Client, Account } from "appwrite";
import { action$, scene$, load$, kbve$, modal$ } from "./KB";
import tw, { styled } from "twin.macro";
import { Helmet } from "react-helmet-async";

//?       [API]

const version = "v1.1A";
const client = new Client()
  .setEndpoint("https://panel.kbve.com/v1")
  .setProject("kbve");

const account = new Account(client);

//?       [FUNCTIONS]

export const AlterCSS = async (__var, __sheet) => {
  document.documentElement.style.setProperty(`--${__var}`, `url("${__sheet}")`);
};

export const Locker = async (__key, __data) => {
  task(async () => {
    //console.log(`[LOCKER] ${__data} into locker for ${__key}`);
    kbve$.setKey(__key, __data);
  });
};

export const Tasker = async (__task, __data) => {
  task(async () => {
    //console.log(`[TASK] ${__task} - ${__data}`);
    switch (__task) {
      case "action":
        return action$.set(__data);
      case "scene":
        return scene$.set(__data);
      case "load":
        return load$.set(__data);
      case "modal":
        return modal$.set(__data);
      default:
        return Locker(__task, __data);
    }
  });
};

export const Scene = () => {
  const $scene = useStore(scene$);

  switch ($scene) {
    case "main":
      return <MainScreen />;
    case "menu":
      return <MenuScreen />;
    case "ship":
      return <ShipScreen />;
    case "port":
      return <PortScreen />;
    case "repair":
      return <RepairScreen />;
    case "refuel":
      return <RefuelScreen />;
    default:
      return <Loader />;
  }
};

export const Init = async () => {
  task(async () => {
    zeroCool(); //! - Remove in v1.2
    setTimeout(() => Tasker("scene", "main"), 1000);
  });
};

export const zeroCool = () => {
  task(async () => {
    //! - Remove Locker Entities v1.2
    Locker("x", "90");
    Locker("y", "34");
    Locker("TL", "");
    Locker("LL", "");
    Locker("BL", "");
    Locker("RL", "");
    Locker("map", "");
  });
};

//TODO    [LISTEN]

action$.subscribe((value) => {
  switch (value) {
    case "fud":
      return AlterCSS(
        "character-sprite",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-EMMY-SHEET.png"
      );
    case "zig":
      return AlterCSS(
        "character-sprite",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-HANK-2-SHEET.png"
      );
    case "dog":
      return AlterCSS(
        "character-sprite",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-BEAR-SHEET.png"
      );
  }
});

//?       [DX]

export const DX = () => {};

//?       [UI]

export const berserkButton = ({ scene = "", text, action = "" }) => {
  const handleClick = async () => {
    if (scene.length > 2) Tasker("scene", scene);
    if (action.length > 2) Tasker("action", action);
  };

  return (
    <button
      className="group"
      onClick={handleClick}
      tw="relative rounded px-5 py-2.5 overflow-hidden bg-[#D1CDB7] hover:bg-gradient-to-r hover:from-[#D1CDB7]/80 hover:to-[#D1CDB7]/50 hover:ring-2 hover:ring-offset-2 hover:ring-[#3F3D36] border border-nier-dark-brown transition-all ease-out duration-300">
      <span tw="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#454138] opacity-40 rotate-12 group-hover:-translate-x-40 ease-in"></span>
      <span tw="relative uppercase text-xl text-nier-dark-brown font-manrope tracking-[.5em] text-shadow-nier shadow-black animate-[pulse_2s_ease-in-out]">
        {text}
      </span>
    </button>
  );
};

export const ShutterButton = ({ action, text }) => {
  const handleClick = async () => {
    Tasker("action", action);
  };

  return (
    <button
      className="group"
      onClick={handleClick}
      tw="relative px-5 py-3 overflow-hidden font-medium text-nier-dark-brown bg-[#bab5a1] border border-nier-dark-brown rounded-lg shadow-inner ">
      <span tw="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease-in-out"></span>
      <span tw="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease-in-out"></span>
      <span tw="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#454138]/80 group-hover:h-full ease-in-out"></span>
      <span tw="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#454138]/80 group-hover:h-full ease-in-out"></span>
      <span tw="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#454138] opacity-0 group-hover:opacity-100"></span>
      <span tw="relative transition-colors duration-300 delay-200 group-hover:text-white ease-in-out">
        {text}
      </span>
    </button>
  );
};

export const shitOnMemeButton = ({ scene, text, svg }) => {
  const handleClick = async () => {
    Tasker("scene", scene);
  };

  return (
    <button
      className="group"
      onClick={handleClick}
      tw="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-nier-red rounded-full shadow-md">
      <span tw="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out">
        {svg}
      </span>
      <span tw="absolute flex items-center justify-center w-full h-full text-nier-red transition-all duration-300 transform group-hover:translate-x-full ease-in-out">
        {text}
      </span>
      <span tw="relative invisible">{text}</span>
    </button>
  );
};

//?       [UX]
export const Loader = () => {
  return (
    <Wrap>
      <div tw="space-y-4 grid place-items-center scale-50">
        <div tw="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-16">
          <div tw="h-24 rounded-t bg-[#57544a]"></div>
          <div tw="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
            <div tw="w-full h-6 rounded bg-[#57544a]"></div>
            <div tw="w-full h-6 rounded bg-[#57544a]"></div>
            <div tw="w-3/4 h-6 rounded bg-[#57544a]"></div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export const GameOptions = () => {};

export const Wrap = (props) => {
  //  const $kbve = useStore(kbve$);

  return (
    <div tw="absolute inset-x-0 bottom-0 p-2 m-1 bg-[#D1CDB7]/70 rounded-3xl">
      <div tw="space-y-2">
        <div tw="text-lg text-nier-dark-brown font-manrope text-nier-dark-brown">
          {props.text}
        </div>
      </div>
      <div tw="flex items-center text-xs rounded text-[#3F3D36] space-x-2">
        {props.children}
      </div>
    </div>
  );
};

export const MainScreen = () => {
  Locker(
    "img",
    "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  );

  return (
    <Wrap text="Main">
      <ShutterButton action="zig" text="Zig" />
      <ShutterButton action="dog" text="Dog" />
      <ShutterButton action="fud" text="Fud" />
    </Wrap>
  );
};

export const ShipScreen = () => {
  Locker(
    "img",
    "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
  );
  return (
    <Wrap text="Welcome to the Ship!">
      <ShutterButton action="repair" text="Repair" />
      <ShutterButton action="refuel" text="Refuel" />
      <ShutterButton action="port" text="SpacePort" />
    </Wrap>
  );
};

export const RegisterModal = () => {};

export const PortScreen = () => {};

export const RefuelScreen = () => {};

export const RepairScreen = () => {};

export const MenuScreen = () => {
  Locker(
    "img",
    'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"'
  );
  return (
    <>
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      </Helmet>
      <Wrap text="Menu">
        <ShutterButton action="en" text="DE" />
        <ShutterButton action="de" text="DE" />
        <ShutterButton action="fr" text="FR" />
      </Wrap>
    </>
  );
};

//?       [MODAL]

export const deployModal = () => {
  const $modal = useStore(modal$);
  return (
    <>
      {$modal ? (
        <>
          <div tw="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div tw="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div tw="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 tw="text-3xl font-semibold">YoRHa UI {version}</h3>
                  <button
                    tw="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => Tasker("modal", false)}>
                    <span tw="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div tw="relative p-6 flex-auto">
                  <p tw="my-4 text-slate-500 text-lg leading-relaxed">
                    This is a small scale "Tamagotchi"-like pocket cyberpunk
                    cowboy game!
                  </p>
                </div>
                {/*footer*/}
                <div tw="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    tw="text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => Tasker("modal", false)}>
                    Close
                  </button>
                  <button
                    tw="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => Tasker("modal", false)}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div tw="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
