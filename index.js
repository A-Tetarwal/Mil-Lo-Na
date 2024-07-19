const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/', (req, res) => {
    fs.readdir(`./files`, function (err, files) {
        console.log(files);
        // jab folder read ho jayega tb hi index.ejs render hoga
        // yahan pe index se data bhej sakte hain
        res.render('index', { files: files });
    })

})

// files ke liye dynamic route
app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        const filedataArray = filedata.split(','); // split hoke ek array me save ho jata hai 
        res.render('show', { filename: req.params.filename, filedata: filedataArray }); // filedata params me nahin aayega, kyunki iss wale app.get me to sirf filename hi hai parameter mein
    })
})

app.post('/create', (req, res) => { // post me form se jo
    console.log(req.body);
    fs.writeFile(`./files/${req.body.Title.split('').join('')}.txt`, req.body.Description, (err) => {
        // new file create hone ke baad "/create" se "/" pe aa jayenge
        res.redirect('/')
    });
})

app.get('/edit/:filename', (req, res) => { // idhar wala params yahan se parameter bhejta hai, taaki hm usko ejs mein use kr sakein
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        const filedataArray = filedata.split(','); // split hoke ek array me save ho jata hai 
        res.render('edit', { filename: req.params.filename, filedata: filedataArray }); // filedata params me nahin aayega, kyunki iss wale app.get me to sirf filename hi hai parameter mein
    })
})

app.post('/edit', (req, res) => {
    const previousFilename = req.body.previousName;
    const newFilename = req.body.newName.trim() !== '' ? req.body.newName : previousFilename;
    const fileContent = req.body.newDescription;

    const updateFileContent = (filename, content, res) => {
        fs.writeFile(`./files/${filename}`, content, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing file');
                return;
            }
            res.redirect('/');
        });
    };

    if (previousFilename !== newFilename) {
        fs.rename(`./files/${previousFilename}`, `./files/${newFilename}`, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error renaming file');
                return;
            }
            updateFileContent(newFilename, fileContent, res);
        });
    } else {
        updateFileContent(previousFilename, fileContent, res);
    }
});

app.listen(3000, () => {
    console.log(`server running on 3000`);
})