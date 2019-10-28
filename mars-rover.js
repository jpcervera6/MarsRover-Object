let stop = false;
class Rover{
    constructor(name){
    this.name = name;
    this.direction = 'N',
    this.x = 0,
    this.y =0,
    this.travelLog =[{x:0, y:0}]
    } 
    turnleft(){
        switch(true){
            case this.direction === 'N':
              this.direction = 'W';
              break;
            case this.direction === 'W':
              this.direction = 'S';
              break;
            case this.direction === 'S':
              this.direction = 'E';
              break;
            default:
              this.direction = 'N';
              break;
          }
          console.log("turnLeft was called!");

    }

    turnRight(){
        switch(true){
          case this.direction === 'N':
            this.direction = 'E';
            break;
          case this.direction === 'E':
            this.direction = 'S';
            break;
          case this.direction === 'S':
            this.direction = 'W';
            break;
          default:
            this.direction = 'N';
            break;
        }
        console.log("turnRight was called!");
      }

      moveForward(){
        if(this.x >= 0 && this.x<10 && this.y >=0 && this.y<10){
          let key1 = true;
          let direction = this.direction;
        switch(direction){
          case  'N':
          if(this.y > 0){
            if(board[this.x][this.y-1].obstacle ==='no'){
              board[this.x][this.y].obstacle = 'no';
              this.y--;
              board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key1 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`);
              key1 = false;
              break;
            }
            break;
          case 'W':
          if(this.x > 0){
            if(board[this.x-1][this.y].obstacle ==='no'){
             board[this.x][this.y].obstacle = 'no';
             this.x--;
             board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key1 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`);
              key1 = false;
              break;
            }
            break;
          case 'E':
          if(this.x < 9){
             if(board[this.x+1][this.y].obstacle ==='no'){
             board[this.x][this.y].obstacle = 'no';
             this.x++;
             board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key1 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`)
              key1 = false;
              break;
            }
            break;
          case 'S':
          if(this.y < 9){
              if(board[this.x][this.y+1].obstacle ==='no'){
              board[this.x][this.y].obstacle = 'no'
              this.y++;
              board[this.x][this.y].obstacle = 'yes'
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key1= false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`);
              key1 = false;
              break;
            }
            break;
          default:
            console.log(`${this.name} out of bounds!`);
            key1 = false;
            break;
            }
         if(key1 === true){
        console.log("moveForward was called!");
        let position = {x:this.x, y:this.y};
        this.travelLog.push(position);
         }else{
           stop = true;
         }
        } else{
          console.log(`${this.name} out of bounds!`);
        }
        
      }

      moveBackward(){
        if(this.x >=0 && this.x<10 && this.y >=0 && this.y<10){
          let key2= true;
          let direction = this.direction;
        switch(direction){
          case 'N':
          if(this.y < 9){
            if(board[this.x][this.y+1].obstacle ==='no'){
              board[this.x][this.y].obstacle = 'no';
              this.y++;
              board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key2 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`)
              key2 = false;
              break;
            }
            break;
          case 'W':
          if(this.x < 9){
             if(board[this.x+1][this.y].obstacle ==='no'){
              board[this.x][this.y].obstacle = 'no';
              this.x++;
              board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key2 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`);
              key2 = false;
              break;
            }
            break;
          case 'E':
          if(this.x > 0){
            if(board[this.x-1][this.y].obstacle ==='no'){
              board[this.x][this.y].obstacle = 'no';
              this.x--;
              board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key2 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`);
              key2 = false;
              break;
            }
            break;
          case 'S':
          if (this.y > 0){
            if(board[this.x][this.y-1].obstacle ==='no'){
              board[this.x][this.y].obstacle = 'no';
              this.y--;
              board[this.x][this.y].obstacle = 'yes';
            }else{
              console.log(`Obstacle detected, ${this.name} stopped!`);
              key2 = false;
              break;
            }}else{
              console.log(`${this.name} out of bounds!`);
              key2 = false;
              break;
            }
            break;
          default:
            console.log(`${this} out of bounds!`);
            key2 = false;
            break;
        }
         if(key2 === true){
        console.log("moveBackward was called!")
        let position = {x:this.x, y:this.y};
        this.travelLog.push(position);
         }else{
           stop = true;
         }
        } else{
          console.log(`${this.name} out of bounds!`);
        }
        
      }

      commands(commands){
        let key = true;
        let h = 0;
        while(key === true && h<commands.length){
        for(let z=0; z<commands.length; z++){
          let check = commands.charAt(z);
          if(check === 'l' || check === 'r' || check === 'b' || check === 'f' ){
            key = true;
            h++;
          } else{
            key = false;
          }
         }
          
        }
        if(key === true){
        for(let k=0; k<commands.length; k++){
          if(stop === true){
            break;
          }else{
          let command = commands.charAt(k);
          switch(command){
            case 'f':
              this.moveForward();
              break;
            case 'l':
              this.turnLeft();
              break;
            case 'r':
              this.turnRight();
              break;
            case 'b':
              this.moveBackward();
            default:  
              break; 
            }
          }
        }
        }else{
          console.log(`Command not valid, ${this.name} position is x:${this.x}, y:${this.y}`);
        }
        console.log(`${this.name} travel log is: `) ;
        console.log(this.travelLog); 
        stop = false;
      }
  }

  class Obstacle{
      constructor(x,y){
          this.x = x;
          this.y = y;
      }
  }

  function createSubArray(){
    let arr = [];
    for(i=0;i<10;i++){
       arr[i] = { x:j, y:i, obstacle: 'no' }
    }
    return arr;
    }

function fillBoard(){
      j = 0;
     let arr1 = [];
        for(let z=0;z<10;z++){
          arr1[z] = createSubArray();
          j=j+1;
        }
        board = arr1;
      }
  function generateObstacles(obstacles){
    for(i=0; i<obstacles; i++){
      let obstacle = new Obstacle(Math.floor(Math.random()*10) , Math.floor(Math.random()*10));
      delete board[obstacle.x][obstacle.y].x;
      delete board[obstacle.x][obstacle.y].y;
      board[obstacle.x][obstacle.y].obstacle = 'yes';
      console.log(obstacle);
      }

    }


  JuanRover = new Rover("Juan's Rover");
  fillBoard();
  generateObstacles(10);
  console.table(board);


  JuanRover.commands('rfffffff');
