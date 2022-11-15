
// function sleepy (name) {
//     /* let my_status = "I am sleepy as fuck" */
//     const my_name = name
//     console.log(` ${my_name} is sleepy as fuck`)
//     prompt(`${my_name} is fucking tired`)
// }

// let userInput = prompt("write your name: ")
// sleepy(userInput)


// function greet (username){
//     console.log(username);
// }

// greet("Jake")

// let greet = (userName) => {
//     console.log(`${userName} Hello`)
// }

// greet("Jake")
// greet("Nigel")


// function greet(userName, time = "Day") {
//     console.log(`Good ${time}, ${userName}!`)
// }

// greet("Jake", "Night")


const unorderedListElement = document.querySelector(".shopping") //DOM element

function populateList(list)
{

    // for (let item of list) both works

    for (let i = 0; i < list.length; i++)
    {
        console.log(list[i]) //for each of these items, create an li, append it to unorderedlistElement
        //createElement -> "li"
        const listItemElements = document.createElement("li"); 
        listItemElements.textContent = list[i];
        unorderedListElement.append(listItemElements);
    }
        
}

let shoppingList = ["cheese", "bread", "green pepper"];

populateList(shoppingList);
