const distanceEval = (pt, pa) => {
    const cellEval = pa.cellIndex - pt.cellIndex;
    const rowEval = pa.parentElement.rowIndex - pt.parentElement.rowIndex;
    return Math.abs(cellEval) + Math.abs(rowEval);
  };
  
  const run = () => {
    const main = document.querySelector('.gem-puzzle');
    main.appendChild(generatePlayingField());
    main.addEventListener('click', (e) => {
      const active = document.querySelector('.table-active');
      if (distanceEval(e.target, active) === 1) {
        active.textContent = e.target.textContent;
        e.target.textContent = '';
        [active, e.target].forEach((el) => el.classList.toggle('table-active'))
      }
    });
  };


  /////teacher's solution

  const getDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

export default () => {
  let currentPosition = { x: 3, y: 3 };
  const tableEl = generatePlayingField();

  tableEl.addEventListener('click', (e) => {
    const cell = e.target;
    const { cellIndex, parentElement: { rowIndex } } = cell;
    const newPosition = { y: rowIndex, x: cellIndex };
    const distance = getDistance(currentPosition, newPosition);
    if (distance !== 1) {
      return;
    }
    const point = tableEl.rows[currentPosition.y].cells[currentPosition.x];
    point.textContent = cell.textContent;
    point.classList.remove('table-active');
    cell.textContent = '';
    cell.classList.add('table-active');
    currentPosition = { x: cellIndex, y: rowIndex };
  });

  const root = document.querySelector('.gem-puzzle');
  root.append(tableEl);
};