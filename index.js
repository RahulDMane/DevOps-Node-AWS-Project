const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Calculator endpoint: /calculate
// POST body: { "operation": "add", "num1": 5, "num2": 3 }
app.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'num1 and num2 must be numbers' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;

    case 'subtract':
      result = num1 - num2;
      break;

    case 'multiply':
      result = num1 * num2;
      break;

    case 'divide':
      if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
      }
      result = num1 / num2;
      break;

    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

// Root route with instructions
app.get('/', (req, res) => {
  res.send(`
    <h1>Simple Node.js Calculator API</h1>
    <p>POST /calculate with JSON body: { "operation": "add|subtract|multiply|divide", "num1": number, "num2": number }</p>
    <p>Example:</p>
    <pre>{
  "operation": "add",
  "num1": 5,
  "num2": 3
}</pre>
  `);
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
