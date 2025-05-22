const chess_container = document.getElementById("chess_container")

function createChessBoard() {
    const chess_container = document.getElementById("chess_container");
    if (!chess_container) return;

    const pieceOrder = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Alternate coloring
            if ((row + col) % 2 === 1) {
                cell.classList.add("green_cell");
            }

            // Add pawns
            if (row === 1) {
                const pawn = document.createElement("img");
                pawn.src = "./images/black-pawn.png";
                cell.appendChild(pawn);
            } else if (row === 6) {
                const pawn = document.createElement("img");
                pawn.src = "./images/white-pawn.png";
                cell.appendChild(pawn);
            }

            // Add other pieces
            else if (row === 0 || row === 7) {
                const piece = document.createElement("img");
                const color = row === 0 ? "black" : "white";
                const pieceType = pieceOrder[col];
                piece.src = `./images/${color}-${pieceType}.png`;
                cell.appendChild(piece);
            }

            chess_container.appendChild(cell);
        }
    }
}


createChessBoard()