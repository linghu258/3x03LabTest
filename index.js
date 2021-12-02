const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
]

const searchInput = document.querySelector('.input');
searchInput.addEventListener("input", (e)=>{
    let value = e.target.value;
    clearList();
    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase()
        setLists(people.filter(person => person.name.includes(value)))
    }

})

function setLists(results){
    if (results.length>0){
        for (const person of results){
            const resultItem = document.createElement('li');
            resultItem.classList.add('result-item');

            const text = document.createTextNode(person.name);
            resultItem.appendChild(text);
            
            list.appendChild(resultItem);

        }
    }else{
        setLists([{name:'No hay resultados'}]);
    }
}

function clearList(){
    list.textContent = '';    
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener("click", clearList);