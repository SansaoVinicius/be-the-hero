const express = require('express');

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json({ event: 'Hello World', aluno: 'Vinícius Willian Sansão' });
});

app.post('/user', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({ event: 'Hello World', aluno: 'Vinícius Willian Sansão' });
});

app.listen(3333);