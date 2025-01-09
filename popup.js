const highLighter = document.getElementById('highLighter');
highLighter.addEventListener('change', function () {
    highLighter.style.backgroundColor = '';
    const selectedValue = this.id;
    if (selectedValue === 'green') {
        highLighter.style.backgroundColor = 'lightgreen';
      } else if (selectedValue === 'yellow') {
        highLighter.style.backgroundColor = 'lightyellow';
      } else if (selectedValue === 'red') {
        highLighter.style.backgroundColor = 'lightcoral';
      }
    });
    


function highlighterColorHandler(event){
    console.log(event.target.id);
    console.log('This is a popup!');
    const selectedValue = event.target.id;
    localStorage.setItem("color",selectedValue);
    event.target.style.border = `4px solid ${event.target.id}`;
}
// let btnYellow = document.querySelector('#yellow');
// let btnGreen = document.querySelector('#green');
// let btnRed = document.querySelector('#red');

// btnYellow.addEventListener('click',()=>btnYellow.style.backgroundColor='#EEE8AA');
// btnGreen.addEventListener('click',()=>btnGreen.style.backgroundColor='#2E8B57');
// btnRed.addEventListener('click',()=>btnRed.style.backgroundColor='#FF6347');