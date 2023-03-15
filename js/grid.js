const root = document.getElementById("tiles");

let tileSize = 125;

// creates the grid of tile elements
function createGrid() {

    // remove the old grid (if there is one)
    root.innerHTML = "";

    // calculate how many rows and columns there should be on the page
    let rows = Math.floor(window.innerHeight / tileSize);
    let columns = Math.floor(window.innerWidth / tileSize); 

    // set the css variables so that the grid can be displayed properly
    root.style.setProperty("--rows", rows);
    root.style.setProperty("--columns", columns);
    
    // loop to create each row
    for (let r = 0; r < rows; r++) {
        
        // create the row element
        let row = document.createElement("div");
        row.className = "row";

        // loop to create each tile in that row
        for (let c = 0; c < columns; c++) {

            // create the tile element
            let tile = document.createElement("div");
            tile.className ="tile";

            // append the tile to the row
            row.appendChild(tile);    

        }
        // append the row to the root grid
        root.appendChild(row);
    }
}

// set up the listener and initialize the grid
window.onresize = createGrid;
createGrid();