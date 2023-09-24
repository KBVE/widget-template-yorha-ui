import React from "react";
import * as VE from "./VE";
import tw, { styled } from "twin.macro";
import { useStore } from "@nanostores/react";

import Phaser from "phaser";
import GridEngine from "grid-engine";
import GameScene from "./scene/GameScene";

export const GameComponent = () => {
  const game = new Phaser.Game({
    type: Phaser.CANVAS,
    title: "yorha",
    parent: document.getElementById("game-content"),
    canvas: document.getElementById("game-canvas"),
    localStorageName: "yorha",
    width: 350,
    height: 224,
    autoRound: false,
    pixelArt: true,
    scene: [ GameScene ],
    physics: {
      default: "arcade",
    },
    plugins: {
      scene: [
        {
          key: "gridEngine",
          plugin: GridEngine,
          mapping: "gridEngine",
        },
      ],
    },
    backgroundColor: "#3A3A3A",
  });
  window.game = game;

return (<div id="game-content" />);
};

export const __bg = () => {
  const $kbve = useStore(VE.kbve$);
  return $kbve.img;
}

export const KBVE = () => {
  const mounted = React.useRef(false);


  React.useEffect(() => {
    mounted.current = true;
    setTimeout(() => GameComponent(), 1000);
    setTimeout(() => VE.Tasker("scene", "main"), 1000);
    //VE.Tasker("scene", "MainScreen");
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div
      tw="sm:min-w-[250px] md:min-w-[300px] md:max-w-[720px] min-h-[550px] max-h-[550px] p-4 shadow-md bg-[#D1CDB7] rounded-3xl overflow-x-hidden overflow-y-hidden bg-cover bg-center bg-blend-darken"
      style={{
        backgroundImage: `url(https://kbve.com/assets/img/curved-images/wave.jpg)`,
      }}
    >
      <div tw="flex justify-between pb-4 ">
        <div tw="flex items-center space-x-4 scale-75 md:scale-90">
          <VE.berserkButton scene="menu" text="Menu" />
          <VE.berserkButton scene="ship" text="Ship" />
        </div>
        <VE.shitOnMemeButton
          scene="main"
          text="Main"
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" tw="">
              <path d="M280.054 19.867c-64.315 0-121.76 28.793-159.643 73.934 27.387.07 87.928 3.05 96.12 25.726-38.414-12.105-79.753-11.26-108.534-9.302a201.013 201.013 0 00-13.656 23.314c31.507-8.307 147.998-3.37 154.8 21.268-75.985-18.624-140.59-8.65-162.058-4.895-8.768 22.446-13.584 46.805-13.584 72.272 0 111.736 96.248 269.949 210.324 269.949 57.808 0 109.1-40.63 145.637-95.248-31.403 23.812-98.04 57.308-139.002 34.648 81.592-8.994 139.965-50.978 156.19-63.353 25.207-47.142 39.959-100.432 39.959-145.996 0-111.737-92.477-202.317-206.553-202.317zm-.002 151.692c105.084 0 190.273 27.727 190.273 61.931 0 22.047-4.495 33.48-57.797 44.453-29.39 6.052-95.127-31.181-132.476-31.181-34.864 0-87.12 41.345-115.219 36.017-56.597-10.732-75.053-26.433-75.053-49.289 0-34.204 85.188-61.931 190.272-61.931zm83.885 39.894c-20.14-.12-41.571 3.295-41.475 9.91.182 12.453 17.364 22.298 38.377 21.99 21.013-.306 18.555-16.216 37.717-23.101-.085-5.837-16.85-8.693-34.62-8.799zm-172.682 2.883c-17.77.105-34.534 2.964-34.62 8.8 19.162 6.885 16.704 22.796 37.718 23.102 21.013.307 38.195-9.54 38.377-21.992.096-6.615-21.336-10.03-41.475-9.91zm92.57 82.441c31.032 0 56.188 25.235 56.188 25.235s-28.184-11.104-59.217-11.104c-31.032 0-53.16 11.104-53.16 11.104s25.156-25.235 56.19-25.235zM31.25 411.39c4.344 2.046 7.783-40.336 52.246-61.265-8.111-8.465-12.438-24.638-14.24-35.502-32.733 4.158-55.012 84.887-38.006 96.767zm56.31-41.694c-7.511-.052-17.26-.228-17.445 16.937-.498 46.31-42.805 96.953-40.128 98.215 7.138 3.364 49.598-32.077 61.906-59.44 4.159-9.244 11.516-55.603-4.333-55.712z"></path>
            </svg>
          }
        />
      </div>
      <div tw="z-10 space-y-4">
        <div tw="space-y-2">
          <div tw="flex flex-wrap h-96">
            <div
              tw="relative w-full px-3 bg-[#3F3D36] rounded-xl bg-cover bg-blend-overlay"
              style={{
                backgroundImage: `url('${__bg()}')`,
              }}
            >
              <div
                id="game-root"
                tw="mt-3 space-x-1 z-20 flex shrink-0 grow-0 min-w-[350px] min-h-[224px] w-full"
              >
                <canvas id="game-canvas" tw="z-30"></canvas>
              </div>
              <VE.Scene />
            </div>

           
          </div>
          <div>
              ALPHA-v1.0.1
            </div>
        </div>
      </div>
    </div>
  );
};

export default KBVE;
