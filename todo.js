// console.log("Welcome to Todo App");


// let todoList = [];

// let userInput = prompt("Enter your choice");

// while (userInput != "quit") {
//     if (userInput === "new") {
//         let newTodo = prompt("Enter your new Todo");


//         todoList.push(newTodo);
//         console.log(`Todo added: "${newTodo}"`);





//     }
//     else if (userInput === "list") {
//         console.log("*****************");
//         console.log("Your Todo List");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i}: ${todoList[i]}`);
//         }

//     }
//     else if (userInput === "delete") {
//         let index = parseInt(prompt("Enter the index of the todo you want to delete"));
//         todoList.splice(index, 1);
//         console.log("Todo deleted");
//     }
//     else {
//         console.log("Invalid choice. Please choose 'new', 'list', 'delete', or 'quit'.");
//     }
//     userInput = prompt("Enter your choice second time");

// }

// if (userInput === "quit") {
//     console.log("You quit the app");
// }

let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
alert('OK QUIT THE APP!')
console.log('OK QUIT THE APP!')
