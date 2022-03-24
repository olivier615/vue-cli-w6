const errHandle = require('./errorHandle');
function postTodo(res, req, headers, body, todos, uuidv4) {
    
    res.writeHead(200, headers);
   
    req
    .on('data', chunk=>{
        body+=chunk;
    })
    .on('end',()=>{
        try{
            const title = JSON.parse(body).title;
            if(title === undefined ){
                errHandle(res);
            }else{

                const todo = {
                    "title": title,
                    "id": uuidv4(),
                }
                todos.push(todo);
                jsonStr = JSON.stringify({
                    "status": 'success',
                    "data": todos,
                });
                res.write(jsonStr);
                res.end();
            }
           
        }catch{
            errHandle(res);
        }
    })
}

module.exports = postTodo;