let chess_container = document.getElementById("chess_container");

let initialLayout = [
    ['br','bn','bb','bq','bk','bb','bn','br'],
    ['bp','bp','bp','bp','bp','bp','bp','bp'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['wp','wp','wp','wp','wp','wp','wp','wp'],
    ['wr','wn','wb','wq','wk','wb','wn','wr'],
  ];



function createChessBoard() {
    let chess_container = document.getElementById("chess_container");
    if (!chess_container) return;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Alternate coloring
            if ((row + col) % 2 === 1) {
                cell.classList.add("green_cell");
            }

            if(initialLayout[row][col] !== ''){
               let piece = document.createElement("img");
               piece.src = `./images/${initialLayout[row][col]}.png`;
               piece.classList.add('piece')
               cell.appendChild(piece)
            }

            cell.addEventListener("click", handleClick)
            chess_container.appendChild(cell);
        }
    }
}

function handleClick(e){
    let cell = e.currentTarget;
    let row = parseInt(cell.dataset.row);
    let col = parseInt(cell.dataset.col);
    let piece = initialLayout[row][col];
    if(piece == "bp" || piece == "wp"){
        showPawnMoves(row, col, piece)
    }
}


function showPawnMoves(row, col, piece){
    clearHighlight()
    let direction = (piece === 'bp') ? 1 : -1; 
    let startRow = (piece === 'bp') ? 1 : 6;
    let nextRow = row + direction;
    if(isBound(nextRow, col) && initialLayout[nextRow][col] === ''){
        highlightCell(nextRow, col)
        if( row == startRow ){
            highlightCell((startRow + (2 * direction)), col)
        }
    }

    if(initialLayout[nextRow][col+1] == '' || initialLayout[nextRow][col-1]){

    }
}

function showKnightMoves(){

}

function highlightCell(row, col){
    let index = row * 8 + col;
    let cells = document.querySelectorAll(".cell")
    if( cells[index]){
        cells[index].classList.add("highlight")
    }
}

function clearHighlight(){
    document.querySelectorAll('.highlight').forEach((cell)=>{
        cell.classList.remove('highlight')
    })
}


function isBound(row, col) {
    if (row > -1 && row < 8 && col > -1 && col < 8) {
        return true
    }
    return false
}


createChessBoard()