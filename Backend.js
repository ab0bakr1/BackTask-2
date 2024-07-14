const fs = require("fs")
const  yargs = require("yargs")
const data7 = require("./data7")




//////////////////////////////////////////////////////////////////////////////////////////////
yargs.command({
    command : "add",
    describe : "to add an item",
    builder : {
        fname : {
           describe :"this is the first name desc in add command",
           demandOption : true ,
           type : "string"
        },
        lname : {
           describe :"this is the last name desc in add command",
           demandOption : true ,
           type : "string"
        }
      },
    handler : (x)=>{
        data7.addPerson(x.id , x.fname , x.lname , x.city , x.age)
    }
})
////////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command : "delete",
    describe: "delete item",
    handler : (x)=> {
        data7.deleteData(x.id)
    }
})
 //////////////////////////////////////////////////////////////////////////////////
yargs.command ({
    command : "read",
    describe : "read item",
    builder : {
        id : {
            describe : "this is id desc in read command ",
            demandOption : true,
            type: "string"
        }
    },
    handler: (x) => {
        data7.readData(x.id)
    }
})
////////////////////////////////////////////////////////////////////////////////////
yargs.command ({
    command : "list",
    describe : "list data",
    handler : () =>{
       data7.listData()
    }
})
/////////////////////////////////////////////////////////////////////////////////////

yargs.parse()