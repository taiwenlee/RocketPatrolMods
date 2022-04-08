// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
   constructor(sccene, x, y, texture, frame) {
      super(sccene, x, y, texture, frame);

      // add object to existing scene
      sccene.add.existing(this);
   }
}