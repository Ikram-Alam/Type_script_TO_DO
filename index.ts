#! /usr/bin/env node
import inquirer from "inquirer";

let list: any = [];
let condition = true;

while(condition){
    let action = await inquirer.prompt(
        [
            {
                type: "input",
                name: "todo",
                message: "What do you want to add ? "
            },
        ]

    )
    list.push(action.todo);
    console.log(list);

    let action2 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "action",
                message: "What do you want to do ?",
                choices: ["Add more ", "Delete", "Exit"]
            }
        ]
    )
    
    if (action2.action === "Add more ") {
        let add = await inquirer.prompt(
            [
                {
                    type: "input",
                    name: "todo",
                    message: "What do you want to add ? "
                },
            ]
        );
        list.push(add.todo);
        console.log(list);
    }
    
    if (action2.action === "Delete") {
        list.pop();
        console.log(list);
        let action2 = await inquirer.prompt(
            [
                {
                    type: "list",
                    name: "action",
                    message: "What do you want to do ?",
                    choices: ["Add more ", "Delete", "Exit"]
                }
            ]
        )
    }
            
    if(action2.action === "Exit"){
        console.log(list);
        process.exit(0);
    }
     
}