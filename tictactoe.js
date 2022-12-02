let numberofplayers=2
let game=true
let players=["X","O"]
    let turn=1
function play(arr,){
    arr=[[" "," "," "],
         [" "," "," "],
         [" "," "," "]]
}
function placeatpos(i){
    if(i==1){
        if(arr[0][0]==" "){
        arr[0][0]=player
        }
    }
    if(i==2){
    if(arr[0][1]==" "){
        arr[0][1]=player
        }
    }
    if(i==3){
        if(arr[0][2]==" "){
            arr[0][2]=player
            }
        }
    if(i==4){
        if(arr[1][0]==" "){
            arr[1][0]=player
            }
        }
    if(i==5){
        if(arr[1][1]==" "){
            arr[1][1]=player
            }
        }
    if(i==6){
        if(arr[1][2]==" "){
            arr[1][2]=player
            }
        }
    if(i==7){
        if(arr[2][0]==" "){
            arr[2][0]=player
            }
        }
    if(i==8){
        if(arr[2][1]==" "){
            arr[2][1]=player
            }
        }
    if(i==9){
        if(arr[2][2]==" "){
            arr[2][2]=player
            }
        }
    else{
     console.log("invalid position")
    }
}
function findwinner(arr){
    if((arr[0][0]=="X" && arr[0][1]=="X" && arr[0][2]) || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
             console.log("WINNER IS",player[turn])
             return false
    }
    if((arr[1][0]=="X" && arr[1][1]=="X" && arr[1][2]) || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[2][0]=="X" && arr[2][1]=="X" && arr[2][2]) || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[1][1]=="X" && arr[0][0]=="X" && arr[2][2]) || (arr[1][1]=="O" && arr[2][2]=="O" && arr[0][0]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[2][1]=="X" && arr[1][1]=="X" && arr[0][2]) || (arr[2][1]=="O" && arr[1][1]=="O" && arr[0][2]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[0][0]=="X" && arr[1][0]=="X" && arr[2][0]) || (arr[0][0]=="O" && arr[1][0]=="O" && arr[2][0]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[0][1]=="X" && arr[1][1]=="X" && arr[2][1]) || (arr[0][1]=="O" && arr[1][1]=="O" && arr[2][1]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[0][2]=="X" && arr[1][2]=="X" && arr[2][2]) || (arr[0][2]=="O" && arr[1][2]=="O" && arr[2][2]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }
    if((arr[2][0]=="X" && arr[2][1]=="X" && arr[0][2]) || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
        console.log("WINNER IS",player[turn])
        return false
    }var numberofplayers=2
    var game=true
   var players=["X","O"]
       var turn=0
      var arr=[["-","-","-"],
            ["-","-","-"],
            ["-","-","-"]]
   console.log("TIC TAC TOE")
   console.log("1   2   3")
   console.log("4   5   6")
   console.log("7   8   9")
   console.log("these are the positions")
   function placeatposition(i,player){
       if(i==1){
           if(arr[0][0]=="-"){
           arr[0][0]=player
           }
         else{
          console.log('invalid place')
            turn--
         }
       }
       else if(i==2){
       if(arr[0][1]=="-"){
           arr[0][1]=player
        
           }
         else{
           console.log('invalid place')
            turn--
         }
       }
       else if(i==3){
           if(arr[0][2]=="-"){
               arr[0][2]=player
             
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else if(i==4){
           if(arr[1][0]=="-"){
               arr[1][0]=player
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else if(i==5){
           if(arr[1][1]=="-"){
               arr[1][1]=player
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else if(i==6){
           if(arr[1][2]=="-"){
               arr[1][2]=player
           
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else if(i==7){
           if(arr[2][0]=="-"){
               arr[2][0]=player
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else if(i==8){
           if(arr[2][1]=="-"){
               arr[2][1]=player
             
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else if(i==9){
           if(arr[2][2]=="-"){
               arr[2][2]=player
            
               }
         else{
           console.log('invalid place')
            turn--
         }
           }
       else{
        console.log("invalid position")
          turn--
       }
   }
   function findwinner(arr){
       if((arr[0][0]=="X" && arr[0][1]=="X" && arr[0][2]=="X") || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
                console.log("WINNER IS",players[turn%2])
                return false
       }
       if((arr[1][0]=="X" && arr[1][1]=="X" && arr[1][2]=="X") || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[2][0]=="X" && arr[2][1]=="X" && arr[2][2]=="X") || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[1][1]=="X" && arr[0][0]=="X" && arr[2][2]=="X") || (arr[1][1]=="O" && arr[2][2]=="O" && arr[0][0]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[2][1]=="X" && arr[1][1]=="X" && arr[0][1]) || (arr[2][1]=="O" && arr[1][1]=="O" && arr[0][2]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[0][0]=="X" && arr[1][0]=="X" && arr[2][0]=="X") || (arr[0][0]=="O" && arr[1][0]=="O" && arr[2][0]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[0][1]=="X" && arr[1][1]=="X" && arr[2][1]=="X") || (arr[0][1]=="O" && arr[1][1]=="O" && arr[2][1]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[0][2]=="X" && arr[1][2]=="X" && arr[2][2]=="X") || (arr[0][2]=="O" && arr[1][2]=="O" && arr[2][2]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       if((arr[2][0]=="X" && arr[1][1]=="X" && arr[0][2]=="X") || (arr[2][0]=="O" && arr[1][1]=="O" && arr[0][2]=="O")){
           console.log("WINNER IS",players[turn%2])
           return false
       }
       return true
   }
   if(numberofplayers==2){
   while(game==true){
      if(turn==10){
           game=false
         console.log("draw")
           break
       }
       if(turn%2==0){
           placeatposition(prompt("enter position 1-9"),players[turn%2])
       }
       else{
           placeatposition(prompt("enter position 1-9"),players[turn%2])
       }
     console.log(...arr[0])
     console.log(...arr[1])
     console.log(...arr[2])
     console.log("----------------------------------------------------")
     if(!findwinner(arr)){
       break
     }
     turn++
   }
   }
    return true
}
if(numberofplayers==2){
    
while(game==true){
    if(turn%2==0){
        placeatposition(prompt("enter position 1-9"),player[turn++])
    }
    else{
        placeatposition(prompt("enter position 1-9"),player[turn++])
    }
    console.log(arr)
    if(turn==10){
        game=false
        return
    }
}
console.log(gameover)
}