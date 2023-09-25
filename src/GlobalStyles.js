import React from 'react'
import styled , { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
:root {
  --pixel-size: 2px;
  --grid-cell: calc( var(--pixel-size) * 16);
  --bg: #9fa7e4;
  --game-map: "";
}

.pixel-art {
  image-rendering: pixelated;
}

.frame {
  width: calc(var(--pixel-size) * 160);
  height: calc(var(--pixel-size) * 144);
  z-index:1; 
  position:relative;
}

.camera {
  width: calc(var(--pixel-size) * 160);
  height: calc(var(--pixel-size) * 144);
  overflow: hidden;
  background: transparent;
  position:relative;
}

.map {
  image-rendering: pixelated;
  background-image: url("https://i.pinimg.com/originals/82/79/b7/8279b776796faee8dc5fe80857d6593b.gif");
  background-size: 100%;
  width: calc(13 * var(--grid-cell));
  height: calc(10 * var(--grid-cell));
  position: relative;
}

.character {
  width: calc( var(--grid-cell)* 2 );
  height: calc( var(--grid-cell)* 2 );
  position: absolute;
  overflow:hidden;
}

.shadow {
  width: calc( var(--grid-cell)* 2 );
  height: calc( var(--grid-cell)* 2 );
  position: absolute;
  left:0;
  top:0;
  background: url("https://assets.codepen.io/21542/DemoRpgCharacterShadow.png") no-repeat no-repeat;
  background-size: 100%;
}

.character_spritesheet {
  position: absolute;
  background: url("https://assets.codepen.io/21542/DemoRpgCharacter.png") no-repeat no-repeat;
  background-size: 100%;
  width: calc( var(--grid-cell)* 8 );
  height: calc( var(--grid-cell)* 8 );
}

.character[facing="right"] .character_spritesheet {
  background-position-y: calc( var(--pixel-size) * -32 );
}
.character[facing="up"] .character_spritesheet {
  background-position-y: calc( var(--pixel-size) * -64 );
}
.character[facing="left"] .character_spritesheet {
  background-position-y: calc( var(--pixel-size) * -96 );
}
.character[walking="true"] .character_spritesheet {
  animation: walkAnimation 0.6s steps(4) infinite; 
}

@keyframes walkAnimation {
 from {
   transform: translate3d(0%,0%,0);
 }
 to {
   transform: translate3d(-100%,0%,0);
 }
}

.dpad {
  position:absolute;
  right: calc(var(--pixel-size) * 2);
  bottom: calc(var(--pixel-size) * 2);
  width: calc(var(--pixel-size) * 37);
  height: calc(var(--pixel-size) * 38);
}
.dpad-button {
  appearance:none;
  outline:0;
  border:0;
  background:transparent;
  padding:0;
  cursor:pointer;
}
.dpad-button svg {
  display:block;
  height: calc(var(--pixel-size) * 13);
}

.dpad-button.pressed .Arrow_arrow-inset { stroke:#07c2cc; }
.dpad-button.pressed .Arrow_arrow-body { stroke:#17dfea; }

.dpad-up {
  position: absolute;
  left: calc(var(--pixel-size) * 12);
  top:0;
}
.dpad-down {
  position: absolute;
  bottom:var(--pixel-size);
  left: calc(var(--pixel-size) * 12);
}
.dpad-left {
  position: absolute;
  top: calc(var(--pixel-size) * 12);
  left:0;
}
.dpad-right {
  position: absolute;
  top: calc(var(--pixel-size) * 12);
  right:0;
}

.dpad-pause {
  position: absolute;
  top: calc((var(--pixel-size) * 12));
  left: calc((var(--pixel-size) * 12));
}

.dpad {
  user-select:none;
}


.corner_topleft,
.corner_topright,
.corner_bottomleft,
.corner_bottomright {
  position: absolute;
  width: var(--pixel-size);
  height: var(--pixel-size);
  background: var(--bg);
  z-index:2;
}

.corner_topleft {
  top: calc(var(--pixel-size) * -1);
  left: calc(var(--pixel-size) * -1);
}
.corner_topright {
  top: calc(var(--pixel-size) * -1);
  right: calc(var(--pixel-size) * -1);
}
.corner_bottomleft {
  bottom: calc(var(--pixel-size) * -1);
  left: calc(var(--pixel-size) * -1);
}
.corner_bottomright {
  bottom: calc(var(--pixel-size) * -1);
  right: calc(var(--pixel-size) * -1);
}

.headline {
  position:absolute;
  top:calc(var(--pixel-size) * 2);
  right:calc(var(--pixel-size) * 2);
  width: calc(var(--pixel-size) * 75)
}

`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles