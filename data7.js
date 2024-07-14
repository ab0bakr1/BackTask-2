const fs = require("fs")

/////////////////////////////////////////////////////////

const addPerson = ( fname , lname , city , age , id) => {
    const allData = loadInfo()

    const towData = allData.filter((obj) =>{
       return  obj.id === id 
    })

     if (towData.length == 0  ){

    allData.push({
      fname : fname,
      lname : lname,
      city : city,
      age : age,
      id : id
    })
    savealldata(allData)
   } else {
    console.log("ERROR DUPLICATED DATA")
   }
}
////////////////////////////////////////////////////////////

const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("data7.json").toString()
        return  JSON.parse(dataJson)
    }
    catch {
        return []
    } 
}
////////////////////////////////////////////////////////////////////

const savealldata = (allData) => {
    const saveallDataJson  = JSON.stringify(allData)
    fs.writeFileSync("data7.json" , saveallDataJson)
}

////////////////////////////////////////////////////////////////////////

const deleteData  = (id) =>{
    const allData = loadInfo()
    const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
    })
    savealldata(dataTokeep)  
}

////////////////////////////////////////////////////////////////////////

const readData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) => {
       return  obj.id == id 
    })
    if (itemNeeded) {
      console.log(itemNeeded)
    }else {
      console.log("ID NEEDED NOT FOUND")
    }
}

///////////////////////////////////////////////////////////////////////

const listData = () => {
    const  allData = loadInfo()
    allData.forEach((obj) => {
       console.log(obj.fname , obj.city)
    })

}
///////////////////////////////////////////////////////////////////////

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}