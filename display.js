let startTime = performance.now();
const num = ["1","2","3","4","5","6","7","8","9","0"];

function Current() {
    let currentTime = ( performance.now() - startTime ) /1000;
    startTime = performance.now();
    return (currentTime.toFixed(3));
}

function play(arr) {
    let a = '';
    for (let i = 1 ; i <= 4 ; i++){
        a += arr[Math.floor(Math.random() * arr.length)] + ' ';
    }
    document.getElementById('number').innerHTML = a
}

play(num);

document.querySelector('.passed').addEventListener('click',(() => {
    document.querySelector('.time').innerHTML = Current()+' s';
    play(num);
    addData();
})) 
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    document.querySelector('.time').innerHTML = Current()+' s';
    play(num);
    addData();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    startTime = performance.now();
    document.querySelector('.time').innerHTML = 'Clear Time';
    play(num);
  }
});
document.querySelector('.clear').addEventListener('click',(() => {
    startTime = performance.now() ;
    document.querySelector('.time').innerHTML = 'Clear Time';
    play(num);
}))

