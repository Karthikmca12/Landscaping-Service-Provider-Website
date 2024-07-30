const { MongoClient } = require("mongodb");

// function to handle form submission request
async function handleFormSubmit(req, res) {
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true });

    try {
        await client.connect();
        const db = client.db(DB_NAME);

        // extract data from request body
        const { name, email, subject, message } = req.body;

        // create new document to be inserted into MongoDB
        const newUser = {
            name,
            email,
            subject,
            message,
            timestamp: new Date(),
        };

        // insert new document into MongoDB collection
        const result = await db.collection("users").insertOne(newUser);

        // send response indicating successful insertion
        res.status(200).send("Message successfully saved to database.");
    } catch (error) {
        console.error("Error occurred while saving message to database:", error);
        res.status(500).send("An error occurred while saving message to database.");
    } finally {
        await client.close();
    }
}

module.exports = {
    handleFormSubmit,
};
