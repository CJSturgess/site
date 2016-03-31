var express = require('express'),
    app = express();
    
app.get('/', express.static('/home/site/site/serve/index.html'));

app.listen(5001);
console.log("Listening on 5001.");