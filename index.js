import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import os from 'os';
const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;



app.use(cors());
app.use(express.static(path.join(process.cwd(), 'public')))
   .set('views', path.join(process.cwd(), 'views'))
   .set('view engine', 'ejs');

// Function to get the server's IP address
const getServerIP = () => {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
      for (const iface of interfaces[interfaceName]) {
          // Check for IPv4 and not a loopback address
          if (iface.family === 'IPv4' && !iface.internal) {
              return iface.address;
          }
      }
  }
  return '127.0.0.1'; // Fallback to localhost if no external IP is found
};

// Log the server IP address
const serverIP = getServerIP();
console.log(`Server IP Address: ${serverIP}`);
// Database connectivity
const dbUrl = "mongodb+srv://wksn753:Tst800vtymnureop@netbettestcluster.stemz.mongodb.net/LiveGenericSchoolsDB?retryWrites=true&w=majority&appName=netbettestcluster";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log('Database connection error:', err);
    });


// Route to get students
app.post('/Students', async (req, res) => {
    try {
        const data = await Student.find({}).maxTimeMS(5000);
        res.json(data);
    } catch (err) {
        console.log('Connection error',err);
        res.status(500).send("The request has timed out. Please check your connection and try again. "+err);
    }
});

app.post('/CreateStudent', async (req, res) => {
  try {
      const studentData = req.body; // Assume the student data is sent in the request body
      const newStudent = new Student(studentData);
      await newStudent.save();
      res.status(201).json(newStudent);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api', (req, res) => {
    res.json({ "msg": "Hello world" });
});