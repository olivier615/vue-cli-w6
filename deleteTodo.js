function deleteTodosAll(res, headers, todos) {
  todos.length = 0;
  res.writeHead(200, headers);
  res.write(JSON.stringify({
    "status": "Success",
    "todos": todos,
    "message": "Delete All"
  }))

  res.end();
}

function deleteTodo() {

}

module.exports = {
  deleteTodosAll,
  deleteTodo
};