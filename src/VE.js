import { atom, task } from "nanostores";
import { persistentMap } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";
import React from "react";

import { Client, Account } from "appwrite";

import tw, { styled } from "twin.macro";

//?       [STORAGE]

export const load$ = atom(true);
export const scene$ = atom("");
export const action$ = atom("");

export const kbve$ = persistentMap("kbve:", [], {
  encode(value) {
    return JSON.stringify(value);
  },
  decode(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
});

//?       [FUNCTIONS]

export const Locker = async (__key, __data) => {
  task(async () => {
    console.log(`Storing ${__data} into locker for ${__key}`);
    kbve$.setKey(__key, __data);
  });
};

export const Tasker = async (__data) => {
  task(async () => {
    console.log(`[Task]@Action - ${__data}`);
    __storage.setKey(__data);
  });
}

export const Init = async () => {
  task(async () => {
    const client = new Client()
      .setEndpoint("https://ap.kbve.com/v1")
      .setProject("[PROJECT_ID]");
    const account = new Account(client);
  });
};

export const zeroCool = () => {};

//?       [BUTTONS]

export const berserkButton = ({ action, text }) => {
  const handleClick = async () => {
     task(async () => {
      console.log(`Action Click Triggered for ${action}`);
       action$.set(action);
     });

  };

  return (
    <button
      //disabled={load$}
      className="group"
      onClick={handleClick}
      tw="relative rounded px-5 py-2.5 overflow-hidden bg-[#D1CDB7] hover:bg-gradient-to-r hover:from-[#D1CDB7]/80 hover:to-[#D1CDB7]/50 hover:ring-2 hover:ring-offset-2 hover:ring-[#3F3D36] transition-all ease-out duration-300">
      <span tw="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#454138] opacity-40 rotate-12 group-hover:-translate-x-40 ease-in"></span>
      <span tw="relative uppercase text-xl text-nier-dark-brown font-manrope tracking-[.5em] text-shadow-nier shadow-black animate-[pulse_2s_ease-in-out]">
        {text}
      </span>
    </button>
  );
};

export const ShutterButton = ({ action, text }) => {
  const handleClick = async () => {
    task(async () => {
      console.log(`Shutter Click Triggered for ${action}`);
      action$.set(action);
    });
  };

  return (
    <button
      //disabled={load$}
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
    task(async () => {
      console.log(`Meme Click Triggered for ${scene}`);
      scene$.set(scene);
    });
  };

  return (
    <button
      className="group"
      onClick={handleClick}
      tw="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-nier-red rounded-full shadow-md">
      <span tw="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-nier-brown group-hover:translate-x-0 ease-in-out">
        {svg}
      </span>
      <span tw="absolute flex items-center justify-center w-full h-full text-nier-red transition-all duration-300 transform group-hover:translate-x-full ease-in-out">
        {text}
      </span>
      <span tw="relative invisible">{text}</span>
    </button>
  );
};

//?       [SCENE]

export const Loader = () => {
  return (
    <div tw="space-y-4">
      <div tw="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse  h-72">
        <div tw="h-48 rounded-t bg-[#57544a]"></div>
        <div tw="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
          <div tw="w-full h-6 rounded bg-[#57544a]"></div>
          <div tw="w-full h-6 rounded bg-[#57544a]"></div>
          <div tw="w-3/4 h-6 rounded bg-[#57544a]"></div>
        </div>
      </div>
    </div>
  );
};

export const MainScreen = () => {

  return (
    <div tw="space-y-4">
      <div tw="space-y-2">
        <div tw="flex flex-wrap h-72">
          {/* FlexBox */}
          <div
            tw="w-full px-3 bg-[#3F3D36] rounded-xl bg-cover bg-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80')`,
            }}>
            <div tw="p-5 m-2 bg-[#D1CDB7]/70 rounded-3xl">
              <div tw="text-lg text-nier-dark-brown font-manrope"> Hello! </div>
            </div>
          </div>
          {/* FlexBox End */}
        </div>
        <div tw="flex items-center text-xs rounded text-[#3F3D36] space-x-2">
          <ShutterButton action="en" text="DE" />
          <ShutterButton action="de" text="DE" />
          <ShutterButton action="fr" text="FR" />
        </div>
      </div>

      <div tw="space-y-2">
        <a rel="noopener noreferrer" href="#" tw="block">
          <h3 tw="text-xl font-semibold">Username Here</h3>
        </a>
        <p tw="text-nier-dark-brown">
          Descriptions? UUID Action
        </p>
      </div>
    </div>
  );
};

export const Scene = () => {
 
  const $scene = useStore(scene$);

  switch ($scene) {
      case 'MainScreen':
          return <MainScreen />;
      default:
          return <Loader />;    
  }


};
