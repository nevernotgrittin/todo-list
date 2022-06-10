let input = prompt ('What would you like to do?')
const toDos = ['Fitness', 'Fashion']
while (input !== 'quit' && input !== 'q' ) {
    if (input === 'list') {
        console.log ('**********')
        for (let i = 0; i < toDos.length; i++) {
            console.log (`${i}: ${toDos[i]}`)
        }
        console.log ('**********')
    } else if (input === 'new') {
        const newToDo = prompt ('Okay, what is the new to do?')
        toDos.push (newToDo)
        console.log (`${newToDo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt (prompt ('Okay, enter an index to delete: '))
        if (!Number.isNaN(index)) {
        const deleted = toDos.splice (index, 1)
        console.log (`Okay, deleted ${deleted[0]}`)
    } else {
        console.log ('Unknown index')
    }
}
input = prompt ('What would you like to do?')
    }
console.log ('Okay, quit the app')
