const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/', (req,res) => {
    fs.readdir(`./files`, function (err, files) {
        console.log(files);
        // jab folder read ho jayega tb hi index.ejs render hoga
        // yahan pe index se data bhej sakte hain
        res.render('index', {files: files});
    })
    
})

app.post('/create', (req, res) => {
    console.log(req.body);
    fs.writeFile(`./files/${req.body.Title.split('').join('')}.txt`, req.body.Description, (err) => {
        // new file create hone ke baad "/create" se "/" pe aa jayenge
        res.redirect('/')
    });

})

app.listen(3000, () => {
    console.log(`server running on 3000`);
})