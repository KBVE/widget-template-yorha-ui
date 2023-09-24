//?     From Pablo.gg 

// Utils
// import {
//     handleCreateMap,
//     handleCreateHero,
//     handleObjectsLayer,
//     handleHeroMovement,
//     handleCreateGroups,
//     handleCreateControls,
//     handleConfigureCamera,
//     handleCreateHeroAnimations,
// } from './helper'

import * as CONSTANTS from './constants'


export default class GameScene extends Phaser.Scene {
    constructor() {
		super({ key: 'GameScene' });
	}

    init() {}

	preload() {
		this.load.image('testImage', 'https://kbve.com/assets/img/curved-images/wave.jpg');
	}

    create() {
		this.createStartButton();
	}

    createStartButton() {
		this.testimage = this.add.image(30, 30, 'testImage');
		this.button = this.add
			.text(CONSTANTS.TILE_WIDTH / 2, CONSTANTS.TILE_HEIGHT / 2, 'HELLO PHASER', {
				fontSize: 32,
				align: 'center',
			})
			.setOrigin(0.0, 0.15)
			.setTint(0x333333)
			.setInteractive({ useHandCursor: true });
	}
}