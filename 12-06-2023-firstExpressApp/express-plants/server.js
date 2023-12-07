const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];


app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });
//We can store multiple params in the req.paramsobject:
  app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
  });
//req.query
//A query is a key-value pair separated with an =, and added to the URL with a ?
//?someKey=someValue

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});
  
//
app.get('/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray]);
    }
    else {
        res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
    }
});

//
app.get('/', (req, res) => {
    res.send("This is the root route")
})

app.listen(port, () => {
    console.log('listening on port', port);
})