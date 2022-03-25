// const errorHandle = require("./errorHandle");

function postTodo(res, todos){
    // const title = JSON.parse(res.status(200).body).title;
    const title = JSON.parse(req.body).title;
    if(JSON.parse(req.body).title === undefiend){
        errorHandle(res.status(200));
    }else{
        // const obj = {
        //     "status": "success",
        //     "data": todos,
        // }
        // res.status(200).json(obj);
        res.status(200).json({
            "status": "success",
            "data": todos,
        });
    }

}
module.exports = postTodo