// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
   constructor(sccene, x, y, texture, frame, leftKey, rightKey, fireKey) {
      super(sccene, x, y, texture, frame);

      sccene.add.existing(this);    // add object to existing scene
      this.isFiring = false;        // track rocket's firing status
      this.moveSpeed = 2;           // pixels per frame
      this.sfxRocket = sccene.sound.add("sfx_rocket"); // load rocket sound effect
      this.leftKey = leftKey;
      this.rightKey = rightKey;
      this.fireKey =  fireKey;
   }

   update() {
      // left/right movement
      if(!this.isFiring) {
         if(this.leftKey.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
         }  else if(this.rightKey.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
         }
      }

      // fire button
      if(Phaser.Input.Keyboard.JustDown(this.fireKey) && !this.isFiring) {
         this.isFiring = true;
         this.sfxRocket.play();
      }

      // if fired, move up
      if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
         this.y -= this.moveSpeed;
      }

      // reset on miss
      if(this.y <= borderUISize * 3 + borderPadding) {
         this.isFiring = false;
         this.y = game.config.height - borderUISize - borderPadding;
      }
   }

   reset() {
      this.isFiring = false;
      this.y = game.config.height - borderUISize - borderPadding;
   }
}
