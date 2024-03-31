const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/tasks', (req, res) => {
    // Replace this with your actual tasks data
    const tasks = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' }
    ];
    res.json(tasks);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
