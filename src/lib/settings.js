//settings.js

//import settingDb from './models/setting.js'
 
async function setup(){
    //const settingItems = await settingDb.getSetting(req)
    let setting = false //settingItems[0]
    let settings = {}

    if(setting){
        settings = {
            siteTitle: setting.siteTitle,
            description: setting.description,
            date: (new Date()).toDateString(),
            dItemLimit: setting.ditemLimit,
            indexPostLimit: setting.fitemLimit,
            categoryPostLimit: setting.categoryItemLimit,
            pageTitle: "Home",
            username: "",
            message: "",
            count: 0,
        }
    }else{
        settings = {
            siteTitle: "ផ្នែក​ខាង​ក្នុង",
            description: "",
            date: (new Date()).toDateString(),
            dItemLimit: 2,
            indexPostLimit: 20,
            categoryPostLimit: 20,
            pageTitle: "Home",
            username: "",
            message: "",
            count: 0,
        }
    }
    
    return settings
}
 
export default setup