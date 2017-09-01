var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: "Article-one| shilpa",
    heading : 'Article one',
    date : 'Aug 13 2017' ,
    content : 
    `<p>
            This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.
            </p>
              <p>
            This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.
            </p>
              <p>
            This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.
            </p> `
    
    
},
 'article-two' :{
     title: "Article-two | shilpa",
    heading : 'Article Two',
    date : 'Sep 13 2017' ,
    content : 
    `<p>
            This is content for my second article. `
},
'article-three' : {
     title: "Article-three | shilpa",
    heading : 'Article Three',
    date : 'Aug 17, 2017' ,
    content : 
    `<p>
            This is content for my third article. `
}
};
function createTemplate (data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate =  `
    <html>
<head>
    <title> ${title}</title>
    <meta name="viewport" content="width=divice-width initial-scale=1" />
    <link href='/ui/style.css' rel='stylesheet' />
    </head>
<body class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <div>
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}            
        </div>
        <div>
          ${content}
        </div>
    </div>
</body>
</html> `
;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    articleName = req.param.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
