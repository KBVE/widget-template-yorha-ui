import React from "react";
import { useStore } from "@nanostores/react";
import axios from "axios";
import * as VE from "./VE";
import tw, { styled } from "twin.macro";
import ShuffleText from 'react-shuffle-text';


export const KBVE = ({ ve }) => {
  const $kbve = useStore(VE.kbve$);

  const userAction = async (_key, _string) => {
    VE.T(_key, _string);
  };

  return (
    <>
      <div tw="flex justify-between pb-4 ">
        <div tw="flex items-center">
          <a
            rel="noopener noreferrer"
            href={$kbve.path}
            tw="mb-0 uppercase text-lg text-nier-dark-brown font-manrope tracking-[.5em] text-shadow-nier shadow-black">
            <ShuffleText content={$kbve.username || "Guest"} />
          </a>
        </div>
        <a rel="noopener noreferrer" href="#">
          See All
        </a>
      </div>
      <div tw="space-y-4">
        <div tw="space-y-2">
          <img
            src={$kbve.img}
            alt=""
            tw="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div tw="flex items-center text-xs divide-x-2 rounded text-[#3F3D36] divide-gray-700">
            <button
              type="button"
              tw="px-3 py-1"
              onClick={() => userAction("userAction", "en")}>
              EN
            </button>
            <button
              type="button"
              tw="px-3 py-1"
              onClick={() => userAction("userAction", "de")}>
              DE
            </button>
            <button
              type="button"
              tw="px-3 py-1"
              onClick={() => userAction("userAction", "fr")}>
              FR
            </button>
          </div>
        </div>

        <div tw="space-y-2">
          {$kbve.load && (
            <div tw="flex items-center justify-center space-x-2">
              <div tw="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
              <div tw="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
              <div tw="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
            </div>
          )}{" "}
          <>
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 tw="text-xl font-semibold">{$kbve.username}</h3>
            </a>
            <p tw="text-nier-dark-brown">
              Descriptions? UUID {$kbve.uuid} and Action {$kbve.userAction}
            </p>
          </>
        </div>
      </div>
    </>
  );
};

export default KBVE;
