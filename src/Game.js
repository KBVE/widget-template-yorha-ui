//?       [GAME] -> Engine that renders the game.
//?       [CREDIT] -> Drew Conley and the Danger Crew Team
import React from "react";  //? [REACT] https://kbve.com/application/javascript/#react
import { useStore } from "@nanostores/react"; //? [NANOSTORES] https://kbve.com/application/javascript/#nanostores
import { x$, y$, kbve$, LeftLimit$, RightLimit$, TopLimit$, BottomLimit$, game$, character$, map$ } from "./KB";     //? [STORAGE] https://kbve.com/project/api/#locker-information

const Game = () => {

    const $x = useStore(x$);
    const $y = useStore(y$);
    const $leftLimit = useStore(LeftLimit$);
    const $rightLimit = useStore(RightLimit$);
    const $topLimit = useStore(TopLimit$);
    const $bottomLimit = useStore(BottomLimit$);
    const $game = useStore(game$);

    const $map = useStore(map$);
    const $character = useStore(character$);


    const character = React.useRef();
    const map = React.useRef();


    var x = $x;
    var y = $y;

    let held_directions = []; 
    var speed = 0.75; 

  const placeCharacter = () => {
    var pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--pixel-size"
      )
    );

    const held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) {
        x += speed;
       
      }
      if (held_direction === directions.left) {
        x -= speed;
      
      }
      if (held_direction === directions.down) {
        y += speed;
       
      }
      if (held_direction === directions.up) {
        y -= speed;
       
      }
      character.current.setAttribute("facing", held_direction);
    }
    character.current.setAttribute(
      "walking",
      held_direction ? "true" : "false"
    );

    // var leftLimit = -8;
    // var rightLimit = 16 * 11 + 8;
    // var topLimit = -8 + 32;
    // var bottomLimit = 16 * 7;

      var leftLimit = $leftLimit;
      var rightLimit = $rightLimit;
      var topLimit = $topLimit;
      var bottomLimit = $bottomLimit;

    if (x < leftLimit) {
      x = leftLimit;
    }
    if (x > rightLimit) {
      x = rightLimit;
    }
    if (y < topLimit) {
      y = topLimit;
    }
    if (y > bottomLimit) {
      y = bottomLimit;
    }

    var camera_left = pixelSize * 66;
    var camera_top = pixelSize * 42;

    map.current.style.transform = `translate3d( ${
      -x * pixelSize + camera_left
    }px, ${-y * pixelSize + camera_top}px, 0 )`;
    character.current.style.transform = `translate3d( ${(x) * pixelSize}px, ${
      y * pixelSize
    }px, 0 )`;
  };

  
  const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  };
  const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  };

  document.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir);
    }
  });

  document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
      held_directions.splice(index, 1);
    }
  });

  const handleUp = () => {
    console.log("Pressed Up");
    held_directions.unshift(directions.up);
  };

  const handleLeft = () => {
    console.log("Pressed Left");
    held_directions.unshift(directions.left);
  };

  const handleRight = () => {
    console.log("Pressed Right");
    held_directions.unshift(directions.right);
  };

  const handleDown = () => {
    console.log("Pressed Down");
    held_directions.unshift(directions.down);
  };

  const handlePause = () => {
    console.log("Paused");
    held_directions = [];
  };

  React.useEffect(() => {
    // upPad.current.dispatchEvent(new KeyboardEvent('keypress', {
    //     key: directions.up,
    //   }));
    const step = () => {

        placeCharacter();

        window.requestAnimationFrame(() => {
          step();
        });
      };
      step();
  
  }, []);

  return (
    <>
      <div className="frame">
        <div className="corner_topleft"></div>
        <div className="corner_topright"></div>
        <div className="corner_bottomleft"></div>
        <div className="corner_bottomright"></div>

        <div className="camera">
          <div className="map pixel-art" ref={map}>
            <div
              className="character"
              facing="down"
              walking="false"
              ref={character}>
              <div className="shadow pixel-art"></div>
              <div className="character_spritesheet pixel-art"></div>
            </div>
          </div>

          <div className="dpad">
            <div className="DemoDirectionUI flex-center">
              <button
                className="dpad-button dpad-left"
                onClick={handleLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shapeRendering="crispEdges">
                  <path
                    className="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    className="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h4M7 4h5M1 5h3M7 5h5M1 6h4M7 6h5M1 7h5M7 7h5M1 8h11"
                  />
                  <path
                    className="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M6 3h1M5 4h1M4 5h1"
                  />
                  <path
                    className="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M6 4h1M5 5h2M5 6h2M6 7h1"
                  />
                  <path
                    className="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path className="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    className="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>

              <button
                className="dpad-button dpad-pause"
                
                onClick={handlePause}>
                {" "}
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#e5e7eb"
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve">
                  <path stroke="#5f5f5f" d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm-32 320c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V192c0-8.836 7.164-16 16-16h32c8.836 0 16 7.164 16 16v128zm128 0c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V192c0-8.836 7.164-16 16-16h32c8.836 0 16 7.164 16 16v128z"></path>
                </svg>{" "}
              </button>
              <button
                className="dpad-button dpad-up"
                onClick={handleUp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shapeRendering="crispEdges">
                  <path
                    className="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    className="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h11M1 4h5M7 4h5M1 5h4M8 5h4M1 6h3M9 6h3M1 7h11M1 8h11"
                  />
                  <path
                    className="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M6 4h1M5 5h1M7 5h1"
                  />
                  <path
                    className="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M6 5h1M4 6h5"
                  />
                  <path
                    className="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path className="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    className="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
              <button
                className="dpad-button dpad-down"
                onClick={handleDown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shapeRendering="crispEdges">
                  <path
                    className="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    className="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h11M1 4h3M9 4h3M1 5h4M8 5h4M1 6h5M7 6h5M1 7h11M1 8h11"
                  />
                  <path
                    className="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M4 4h5"
                  />
                  <path
                    className="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M5 5h3M6 6h1"
                  />
                  <path
                    className="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path className="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    className="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
              <button
                className="dpad-button dpad-right"
                onClick={handleRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shapeRendering="crispEdges">
                  <path
                    className="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    className="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h5M8 4h4M1 5h5M9 5h3M1 6h5M8 6h4M1 7h5M7 7h5M1 8h11"
                  />
                  <path
                    className="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M6 3h1M7 4h1M8 5h1"
                  />
                  <path
                    className="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M6 4h1M6 5h2M6 6h2M6 7h1"
                  />
                  <path
                    className="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path className="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    className="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
