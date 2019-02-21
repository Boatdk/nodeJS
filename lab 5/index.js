var express = require('express');
var app = express()

app.use(express.static(__dirname+ '/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.send('HELLO WORLD')
})

app.get('/fruit', (req, res) =>{
   res.render('fruit', {fruits: ['banana', 'apple'] , foo: 'bar'})
})



app.get('/computer', (req, res) => {
    res.render('computer', {
        item:[{name:'window', photo:'/window.jpeg'},
              {name:'OSX', photo:'/osx.jpg'},
              {name:'Android', photo:'/android.png'},
              {name:'IOS', photo:'/ios.png'}
    ]
    })
})
 
app.listen(8000);
console.log('Server is ready!');