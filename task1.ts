import inquirer from "inquirer";
import chalk from  "chalk";
interface item{
    [key:string]:string |number;
    id:number;
    item:string;
    price:number;
    choice:string;
}
let paymentOptions=["easypaisa","credit card","cash"];
let totalbill:number=0;
let fruits:item[]=[
    {id:1, item:"apple", price:20,choice:"any"},
    {id:2, item:"mango",price:50 ,choice:"any"},
    {id:3, item:"banana",price:30,choice:"any"},
];
let vegetables:item[]=[
    {id:1, item:"cucumber", price:10,choice:"any"},
    {id:2, item:"potato", price:20,choice:"any"},
    {id:3, item:"carrot", price:15,choice:"any"},
];
let item: any
let getGrocery=async()=>{
    item=await inquirer.prompt([
        {
            name:"choice",
            type:"list",
            message:"what would you like to buy",
            choices:["fruits","vegetables","checkout"],
        },
    ]);
}
if( item.choice==="Fruits"){
    let fruit=await inquirer.prompt([
        {
            name:"choice",
            type:"list",
            message:"which vegetable would you like to buy",
            choices:["fruits[0].item,fruits[1].item,fruits[2].item"],
        },
    ])
}
let quantity=await inquirer.prompt([
    {
        name:"quantity",
        type:"number",
        message:"Quantity",
    },
])
let fruit:any
if(fruit.choice ===fruits[0].item){
totalbill=totalbill+quantity.Quantity*fruits[0].price;
}else if(fruit.choice===fruits[1].item){
    totalbill=totalbill+quantity.Quantity*fruits[1].price;
}else if(fruit.choice===fruits[2].item){
    totalbill=totalbill+quantity.Quantity*fruits[2].price;
};
if (item.choice==="vegetable"){
    let vegetable=await inquirer.prompt([
        {
            name:"choice",
            type:"number",
            message:"which vegetable would you buy",
            choices:[vegetables[0].item,vegetables[1].item,vegetables[2].item],
        },
    ]);
};
let Quantity=await inquirer.prompt([
    {
        name:"quantity",
        type:"number",
        message:"Quantity",
    },  
]);
let vegetable:any
       if(vegetable.choice===vegetables[0].item){
        totalbill=totalbill+quantity.Quantity*vegetables[0].price;
     }else if(vegetable.choice===vegetables[1].item){
        totalbill=totalbill=quantity.Quantity*vegetables[1].price;  
     }else if(vegetable.choice===vegetables[2].item){
        totalbill=totalbill+quantity.Quantity*vegetables[2].price;

     }
console.log("total bill is ${total bill}");
let checkout:any
checkout(totalbill);
let checkOut=async(totalbill:number)=>{
    let check=await inquirer.prompt([
        {
            name:"checkOut",
            type:"list",
            message:"what is your preffered checkout method",
            choices:paymentOptions,
        },
    ]);
}
let check:any
    for(let i=0; paymentOptions.length>i++;){
        if(check.checkout===paymentOptions[i]){
            console.log
                chalk.strikethrough(
                    chalk.red(
                    'your payment of ${totalbill}is processed using {check.checkout}',
                )
            )
            
        }
    };