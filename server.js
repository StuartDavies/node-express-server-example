const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/api', function(request, response)
{
    response.send("Some data from an express node server");
});

app.listen(port, function() 
{
    console.log(`Server running on port ${port}`);
});