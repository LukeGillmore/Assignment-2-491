window.onload = main;

let isGosper = false; 
let isPenta = false; 
let isBlinker = false; 
let isBeacon = false;
let isMonogram = false; 

let speed = 10;
function main() {

  /** Start Game  */
 let isStart = false;  
let start = document.getElementById('start');
start.onclick = () => {
game.start();
}
/** Increase animation speed */
let speedUp = document.getElementById('speedUp');
speedUp.onclick = () => {
 speed--;
 if(speed < 1) speed = 1; 
}
/** Reduce animation speed */
let slowDown = document.getElementById('slowDown');
slowDown.onclick = () => {speed++;}

/** Add Gosper gun to the board */

// let gosper = document.getElementById('gosper');
// gosper.onclick = ()=>{
// isGosper = !isGosper;
// }
// /** Add penta to the board */

// let penta = document.getElementById('penta');
// penta.onclick = ()=>{
//   isPenta = !isPenta;
// }
// /** Add blinker to the board */

// let blinker2 = document.getElementById('blinker2');
// blinker2.onclick = ()=>{
//   isBlinker = !isBlinker;
// }
// /** Add beacon to the board */

// let beacon = document.getElementById('beacon');
// beacon.onclick = ()=>{
//   isBeacon = !isBeacon;
// }
// /** Add monogram to the board */

// let monogram = document.getElementById('monogram');
// monogram.onclick = ()=> {
//   isMonogram = !isMonogram;
// }








var canvas = document.getElementById('gameWorld');
var ctx = canvas.getContext('2d');
const board = new Board();
let game = new GameEngine(ctx, board);
}
let isClicked = false;
const ROWS  = 80;
const COLS = 100;
const SQAURE_SIZE = 10;
let board  = [[]];

class Board {

  constructor() {
    // this.board = doubleGun;
    // this.board = doubleGun;
    this.board = this.initialize();
    this.count = 1;

      // this.board[2][2] = 1;
      // this.board[2][3] = 1;
      // this.board[3][2] = 1;
      // this.board[3][3] = 1;

      // this.board[4][4] = 1;
      // this.board[4][5] = 1;
      // this.board[5][4] = 1;
      // this.board[5][5] = 1; 

      // Gosper Gun
   this.board[10][3] = 1;
    this.board[10][4] = 1;
    this.board[9][3] = 1;
    this.board[9][4] = 1;
    
    this.board[7][15] = 1;
    this.board[7][16] = 1;
    this.board[8][14] = 1;
    this.board[9][13] = 1;
    this.board[10][13] = 1;
    this.board[11][13] = 1;
    this.board[12][14] = 1;
    this.board[13][15] = 1;
    this.board[13][16] = 1;
    this.board[12][18] = 1;
    this.board[11][19] = 1;
    this.board[10][19] = 1;
    this.board[10][20] = 1;
    this.board[10][17] = 1;
    this.board[9][19] = 1;
    this.board[8][18] = 1;
    
    this.board[5][27] = 1;
    this.board[6][27] = 1;
    this.board[6][25] = 1;
    this.board[7][24] = 1;
    this.board[8][24] = 1;
    this.board[9][24] = 1;
    this.board[7][23] = 1;
    this.board[8][23] = 1;
    this.board[9][23] = 1;
    this.board[10][25] = 1;
    this.board[10][27] = 1;
    this.board[11][27] = 1;
    
    this.board[7][37] = 1;
    this.board[8][37] = 1;
    this.board[8][38] = 1;
    this.board[7][38] = 1;
    
    this.board[8][44] = 1;
    this.board[9][44] = 1;
    this.board[10][44] = 1;
    
    this.board[5][47] = 1;
    this.board[6][47] = 1;
    this.board[5][48] = 1;
    
    
    this.board[8][49] = 1;
    this.board[8][50] = 1;
    this.board[7][50] = 1;


    /// Oscilator 
    this.board[16][54] = 1;
    this.board[16][53] = 1;
    this.board[17][53] = 1;
    this.board[18][53] = 1;
    this.board[19][53] = 1;
    this.board[20][53] = 1;
    this.board[20][54] = 1;
    this.board[18][52] = 1;
    this.board[17][51] = 1;
    this.board[19][51] = 1;
    this.board[18][50] = 1;
    this.board[18][49] = 1;
    this.board[17][49] = 1;
    this.board[16][49] = 1;
    this.board[19][49] = 1;
    this.board[20][49] = 1;
    this.board[20][48] = 1;
    this.board[16][48] = 1;

    
    
  // /// Pentadecathlon (period 15)
    this.board[31][4] = 1;
    this.board[31][5] = 1;
    this.board[30][6] = 1;
    this.board[32][6] = 1;
    this.board[31][7] = 1;
    this.board[31][8] = 1;
    this.board[31][9] = 1;
    this.board[31][10] = 1;
    this.board[30][11] = 1;
    this.board[32][11] = 1;
    this.board[31][12] = 1;
    this.board[31][13] = 1;

   



// gosper gun
    // this.board[40][6] = 1;
    // this.board[40][7] = 1;
    // this.board[41][6] = 1;
    // this.board[41][7] = 1;
    
    // this.board[40][16] = 1;
    // this.board[41][16] = 1;
    // this.board[42][16] = 1;
    // this.board[39][17] = 1;
    // this.board[38][18] = 1;
    // this.board[38][19] = 1;
    // this.board[39][21] = 1;
    // this.board[40][22] = 1;
    // this.board[41][22] = 1;
    // this.board[41][23] = 1;
    // this.board[41][30] = 1;
    // this.board[42][22] = 1;
    // this.board[43][21] = 1;
    // this.board[44][19] = 1;
    // this.board[44][18] = 1;
    // this.board[43][17] = 1;
    
    // this.board[40][26] = 1;
    // this.board[39][26] = 1;
    // this.board[38][26] = 1;
    
    // this.board[38][27] = 1;
    // this.board[40][27] = 1;
    // this.board[39][27] = 1;
    
    
    // this.board[37][28] = 1;
    // this.board[37][30] = 1;
    // this.board[36][30] = 1;
    
    // this.board[41][28] = 1;
    // this.board[41][30] = 1;
    // this.board[42][30] = 1;
    
    // this.board[39][42] = 1;
    // this.board[38][42] = 1;
    // this.board[39][41] = 1;
    // this.board[38][41] = 1;
















      board = this.board;
     this.countEdge = 0;
  }


  /**Create empty array */
  zeroWorld() {
    let arr = new Array(ROWS);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(COLS);
    }
    return arr;
  }

  /** fill world  with random ones or zeros*/
  initialize() {
    let world = this.zeroWorld(ROWS, COLS);
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        world[i][j] = 0;
      }
    }
    return world;
  }

  update() {
    if( this.count % speed == 0){
    let mutation = this.initialize();

    for (let rows = 0; rows < ROWS; rows++) {
      for (let cols = 0; cols < COLS; cols++) {
        let sum = 0;
        let currentState = this.board[rows][cols];

        if (rows == 0 || rows == ROWS - 1 || cols == 0 || cols == COLS - 1) {

          mutation[rows][cols] = currentState;
          
          this.countEdge++;
        } else {
  
          sum += this.board[rows - 1][cols - 1]; //top left
          sum += this.board[rows - 1][cols]; // top
          sum += this.board[rows - 1][cols + 1]; // top right
          sum += this.board[rows][cols - 1]; // left
          sum += this.board[rows][cols + 1]; // right
          sum += this.board[rows + 1][cols - 1]; // bottom left
          sum += this.board[rows + 1][cols]; // bottom
          sum += this.board[rows + 1][cols + 1]; //bottom right
      
        }

        
          // Cell is dead then comes alive when has three nieghbors
        if (currentState == 0 && sum == 3) {
          mutation[rows][cols] = 1;
          // Cell must die because it has less that 2 or ≤ 3 neighbors
        } else if (currentState == 1 && (sum < 2 || sum > 3)) {
          mutation[rows][cols] = 0;
          
        } else {
          // CEll remians as is. 
          mutation[rows][cols] = currentState; 
        }
      }
    }

    this.board = mutation;
    board = this.board;
    
  }
  this.count +=1;
  }




  draw(ctx) {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {

        let x = col * SQAURE_SIZE;
        let y = row * SQAURE_SIZE;
        if (this.board[row][col] === 1) {
          ctx.fillStyle = 'yellow';
        }
        else {
          ctx.fillStyle = 'darkblue';
        }
        ctx.fillRect(x, y, SQAURE_SIZE, SQAURE_SIZE);
        ctx.rect(x, y, SQAURE_SIZE, SQAURE_SIZE);
        // ctx.stroke();
      }
    }
  } 
}