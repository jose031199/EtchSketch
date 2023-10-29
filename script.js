//Initialize to create the etc-sketch 
const sketchContainer =  document.getElementById('container');
const clearBtn = document.getElementById('clear');
const darkBtn = document.getElementById('darkColor');
const div = document.createElement('div');
let isDark= false;
creatingSketch();
function creatingSketch(size = 16){
    for (let index = 0; index < size**2; index++) {
        const squares = document.createElement('div');
        squares.setAttribute('style','height:20px;width:20px;background-color:white;border:2px solid grey;')
        squares.addEventListener('mouseover',(e)=>{
            squareColor = chooseColor(isDark);
            e.target.setAttribute('style',`background-color:${squareColor}`);
        });
        sketchContainer.append(squares);
    }
    sketchContainer.setAttribute('style',`display:grid;grid-template-columns:repeat(${size},1fr);margin-top:10px;`)
}

function chooseColor(isDark){
    listColors = ['red','green','blue'];
    if (isDark) {
        listColors = ['rgb(101, 7, 7)','rgb(3, 86, 3)','rgb(9, 9, 84)'];
    }
    value=listColors[Math.floor(Math.random() * Math.floor(listColors.length))];
    return value;
}


darkBtn.addEventListener('click',(e)=>{
    isDark = true;
});

clearBtn.addEventListener('click',(e)=>{
    sketchContainer.innerHTML = '';
    creatingSketch();
});


