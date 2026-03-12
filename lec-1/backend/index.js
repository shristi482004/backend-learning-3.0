require('dotenv').config();
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { id: 2, setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    // Add more jokes as needed
  ];
  res.json(jokes);  // Send as JSON array
});

app.get('/about',(req,res)=>{
    res.send('This is about page');
})

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port ' + process.env.PORT);
});