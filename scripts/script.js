
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

function changeListType()
{
    // unorderedListElement.classList.add("squareList");
    // unorderedListElement.classList.remove("circleList");

    //using replace

    unorderedListElement.classList.replace("circleList", "squareList");
}

changeListType()

function updateImage(){
    const imageElement = document.querySelector("#shoppingCart");
    console.log(imageElement);
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    imageElement.width = 100;
    imageElement.height = 100;
    imageElement.alt = "shopping cart icon";
}
updateImage();

function findGreen()
{
    const listItems = document.querySelectorAll(".shopping li");
    // console.log(listItems);
    for (let i = 0; i < listItems.length; i++)
    {
        // console.log(listItems[i]);
        if(listItems[i].textContent.includes("green")){
            console.log(listItems[i]);
            listItems[i].classList.add("greenText");
        }
        
    }
}
findGreen();
