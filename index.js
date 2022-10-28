const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//said that when you reference window object like that you dont need the window.
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

class Player {
  constructor() {
    //initial parameters that will be altered but got to be initialized
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.y += this.velocity.y;
    this.draw();

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

const player = new Player();

player.update();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}
// a = 65
// s = 83
// d = 68
// w = 87
animate();

addEventListener("keydown", ({ keyCode }) => {
  //   console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log("left");
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      break;
    case 87:
      console.log("up");
      //it needs to be negative because y with adding in y axes you are going down
      player.velocity.y -= 10;
      break;
  }
});
