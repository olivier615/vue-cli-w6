// const errorHandle = require("./errorHandle");

function postTodo(res, todos){
    const title = JSON.parse(res.status(200).body).title;
    if(title === undefiend){
        errorHandle(res);
    }else{
        const obj = {
            "status": "success",
            "data": todos,
        }
        res.json(obj);
    }

}
module.exports = postTodo