const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//said that when you reference window object like that you dont need the window.
canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor() {
    //initial parameters that will be altered but got to be initialized
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 30;
    this.height = 30;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();

player.draw();
