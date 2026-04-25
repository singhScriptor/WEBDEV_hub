const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        fs.readFile('formValues.txt', (err, data) => {
            let savedValue =''
            if(!err){
                savedValue=data.toString() 
            }
            res.end(`
                <form action="/message" method="post">
                    <h1> ${savedValue}</h1>
                    <label>Name:</label>
                    <input type="text" name="name">
                    <button type="submit">Add</button>
                </form>
            `);
        });
    }
    else if (url === '/message') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const buffer = Buffer.concat(body);
            const formData = buffer.toString();
            const formValues = formData.split("=")[1];

            fs.writeFile('formValues.txt', formValues, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    }
    else if (url === '/read') {
        fs.readFile('formValues.txt', (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(`<h1>${data}</h1>`);
        });
    }
};

module.exports = requestHandler;