import React from "react";
import { useStore } from "@nanostores/react";
import * as VE from "./VE";

import tw, { styled } from "twin.macro";

export const KBVE = () => {

  const $kbve = useStore(VE.kbve$);

  const userAction = async (_key, _string) => {
      VE.Tasker(_key, _string);
  };

  return (
    <div tw="min-w-[300px] max-w-[600px] p-4 shadow-md bg-[#D1CDB7] rounded-3xl overflow-x-hidden overflow-y-hidden">
      <div tw="flex justify-between pb-4 ">
        <div tw="flex items-center">
          <a
            rel="noopener noreferrer"
            href={"/#"}
            tw="mb-0 uppercase text-lg text-nier-dark-brown font-manrope tracking-[.5em] text-shadow-nier shadow-black">
            {"Guest"}
          </a>
        </div>
        <a rel="noopener noreferrer" href="#">
          See All
        </a>
      </div>
      <div tw="space-y-4">
        <div tw="space-y-2">
          <img
            src={""}
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
          <a rel="noopener noreferrer" href="#" tw="block">
            <h3 tw="text-xl font-semibold">Username Here</h3>
          </a>
          <p tw="text-nier-dark-brown">Descriptions? UUID  Action {$kbve.userAction}</p>
        </div>
      </div>
    </div>
  );
};

export default KBVE;
