const container = document.querySelector(".container");


function gridCreation(side=16) {
    for (let index = 1; index <= (side*side); index++) {
      const grid = document.createElement('div');
      grid.id = index;
      grid.className = 'grid';
      container.appendChild(grid);
    }
    container.style.gridTemplate = 'repeat(' + side + ', 1fr) / repeat(' + side + ', 1fr)'
  };


  function gridDestruction() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach( grid => {
      container.removeChild(grid);
    });
  };

  function drawLines() {  
    const draw = document.querySelectorAll('.grid')
  
    function changeColor(e, color) {
      e.target.style.backgroundColor = color;
      e.target.style.borderColor = color;
    }
  
    draw.forEach(square => {
      square.addEventListener('mouseover', (e) => changeColor(e, '#454545'));
    });
  };

  function blankAll() {
    const draw = document.querySelectorAll('.grid')
    draw.forEach(square => {
      square.style.backgroundColor = '';
    });
    const side = prompt('How many sides? (1 - 64)', 16);
    gridDestruction();
    gridCreation(side);
    drawLines();
  };

  // Initialization
gridCreation();
drawLines();
const reload = document.querySelector('#reload');
reload.addEventListener('click', blankAll);
