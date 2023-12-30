import inquirer from "inquirer";
import chalk from "chalk";
let paymentOptions = ["easypaisa", "credit card", "cash"];
let totalbill = 0;
let fruits = [
    { id: 1, item: "apple", price: 20, choice: "any" },
    { id: 2, item: "mango", price: 50, choice: "any" },
    { id: 3, item: "banana", price: 30, choice: "any" },
];
let vegetables = [
    { id: 1, item: "cucumber", price: 10, choice: "any" },
    { id: 2, item: "potato", price: 20, choice: "any" },
    { id: 3, item: "carrot", price: 15, choice: "any" },
];
let getGrocery = async () => {
    let item = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "what would you like to buy",
            choices: ["fruit", "vegetable", "checkout"],
        },
    ]);
};
if (item.choice === "fruit") {
    let fruit = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "which vegetable would you like to buy",
            choices: [fruits[0].item, fruits[1].item, fruits[2].item],
        },
    ]);
}
let quantity = await inquirer.prompt([
    {
        name: "quantity",
        type: "number",
        message: "Quantity",
    },
]);
if (fruits.choice === fruits[0].item) {
    totalbill = totalbill + quantity.Quantity * fruits[0].price;
}
else if (fruits.choice === fruits[1].item) {
    totalbill = totalbill + quantity.Quantity * fruits[1].price;
}
else if (fruits.choice === fruits[2].item) {
    totalbill = totalbill + quantity.Quantity * fruits[2].price;
}
;
if (item.choice === "vegetable") {
    let vegetable = await inquirer.prompt([
        {
            name: "choice",
            type: "number",
            message: "which vegetable would you buy",
            choices: [vegetables[0].item, vegetables[1].item, vegetables[2].item]
        },
    ]);
}
;
let Quantity = await inquirer.prompt([
    {
        name: "quantity",
        type: "number",
        message: "Quantity",
    },
]);
if (vegetables.choice === vegetables[0].item) {
    totalbill = totalbill + quantity.Quantity * vegetables[0].price;
}
else if (vegetables.choice === vegetables[1].item) {
    totalbill = totalbill = quantity.Quantity * vegetables[1].price;
}
else if (vegetables.choice === vegetables[2].item) {
    totalbill = totalbill + quantity.Quantity * vegetables[2].price;
}
console.log("total bill is ${total bill}");
checkOut(totalbill);
let checkOut = async (totalbill) => {
    let check = await inquirer.prompt([
        {
            name: "checkOut",
            type: "list",
            message: "what is your preffered checkout method",
            choices: paymentOptions,
        },
    ]);
};
for (let i = 0; ; i++) {
    if (check.checkout === paymentOptions[i]) {
        console.log(chalk.strikethrough(chalk.red('your payment of ${totalbill}is processed using {check.checkout}')));
    }
}
;
