const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const user_id = "john_doe_17091999";
  const user = {
        user_id: user_id,
        email: "john@xyz.com",
        roll_number: "ABCD123"
    };
    
   
    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    
  
    data.forEach(item => {
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                evenNumbers.push(item.toString());
            } else {
                oddNumbers.push(item.toString());
            }
        } else if (typeof item === 'string') {
            if (/^[a-zA-Z]$/.test(item)) {
                alphabets.push(item.toUpperCase());
            }
        }
    });
    
   
    const response = {
        is_success: true,
        user_id: user.user_id,
        email: user.email,
        roll_number: user.roll_number,
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets: alphabets
    };
    
    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
