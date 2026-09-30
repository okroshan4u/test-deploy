import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from server");
});
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Atoms",
            "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "title": "Scarecrow",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "title": "Im-pasta",
            "content": "What do you call fake spaghetti? An impasta!"
        },
        {
            "id": 4,
            "title": "Bicycle",
            "content": "Why did the bicycle fall over? Because it was two-tired!"
        },
        {
            "id": 5,
            "title": "Nacho Cheese",
            "content": "What do you call cheese that isn't yours? Nacho cheese!"
        }
    ]

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
