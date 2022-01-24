let cube  = document.querySelector('.cube');
let margLeft = 0;
let margTop = 0;

document.onkeydown = function(e) {
  if (e.key == 'ArrowRight') {
    if (margLeft != 300) {
      margLeft = margLeft + 10;
      cube.style.marginLeft = margLeft + 'px';
    }
  }
  else if (e.key == 'ArrowLeft') {
    if (margLeft != 0) {
      margLeft = margLeft - 10;
      cube.style.marginLeft = margLeft + 'px';
    }
  }
  else if (e.key == 'ArrowUp') {
    if (margTop != 0) {
      margTop = margTop - 10;
      cube.style.marginTop = margTop + 'px';
    }
  }
  else if (e.key == 'ArrowDown') {
    if (margTop != 100) {
      margTop = margTop + 10;
      cube.style.marginTop = margTop + 'px';
    }
  }
  return false;
}