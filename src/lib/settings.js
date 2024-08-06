//settings.js

async function setup(req){
    const module = await import('$lib/db/setting.js')
    let set = await module.default.getSettings(req, 1)
    let setting = set[0]
    let settings = {}

    if(setting){
        settings = {
            siteTitle: setting.title,
            description: setting.description,
            dItemLimit: setting.dashboard,
            indexPostLimit: setting.frontend,
            categoryPostLimit: setting.categories,
        }
    }else{
        settings = {
            siteTitle: "ផ្នែក​ខាង​ក្នុង",
            description: "",
            dItemLimit: 10,
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