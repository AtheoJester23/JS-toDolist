const theList = JSON.parse(localStorage.getItem('save'));;

Render();

function Render(){
    let toPrint = '';

    theList.forEach(function(arrayObject, index){
        const {name, dueDate} = arrayObject;
        
        const text = `
        <div class = secondGrid>
            <div>
                ${name} 
            </div>
            
            <div>
                ${dueDate} 
            </div>

            <button
//              What index in array to remove   How many values to remove
//                                          🠗   🠗                         
                onclick = "theList.splice(${index}, 1);
                Render();
                save();
                " class = "dButton">Delete</button>
        </div>
        `;
        toPrint += text;
    })

    document.querySelector('.textPrint').innerHTML = toPrint;
}



function addDoto(){
    const emelentIpnut = document.querySelector('.addThis');
    const dateInput = document.querySelector('.dateDate');
    let theVal = emelentIpnut.value;
    let theDateval = dateInput.value;


    theList.push({
        name: theVal,
        dueDate: theDateval
    });    

//     This is to remove the current text that's in the input box.
//            🠗
    emelentIpnut.value = '';

    Render();

    save();
}

function save(){
    localStorage.setItem('save', JSON.stringify(theList));
}