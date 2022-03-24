function getTodo(res, headers, todos) {
    res.writeHead(200, headers);
    const jsonStr = JSON.stringify({
        'status': 'success',
        'data': todos,
    });
    res.write(jsonStr);
    res.end();
}
module.exports = getTodo;