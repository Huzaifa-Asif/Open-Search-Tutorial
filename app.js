var express = require('express');
var app = express();
const { Client } = require('@opensearch-project/opensearch');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const client = new Client({
    node: "https://admin:admin@localhost:9200"
});
const index_name = 'books';

// route to create index
app.get('/create-index', async (req, res) => {
    try {
        const settings = {
            settings: {
                index: {
                    number_of_shards: 1,
                    number_of_replicas: 1,
                },
            },
        };

        const response = await client.indices.create({
            index: index_name,
            body: settings,
        });

        res.send(response);
    } catch (e) {
        res.status(500).json(e);
    }
});

// route to add document
app.get('/add-document', async (req, res) => {
    try {
        const document = {
            title: 'The Outsider',
            author: 'Stephen King',
            year: '2018',
            genre: 'Crime fiction',
        };
    
        const response = await client.index({
            index: index_name,
            body: document,
            refresh: true,
        });

        res.send(response.body);
    } catch (e) {
        res.status(500).json(e);
    }
});

// route to search document
app.get('/search-documents', async (req, res) => {
    try {
        var query = {
            query: {
                match: {
                    title: {
                        query: 'The Outsider',
                    },
                },
            },
        };
    
        var response = await client.search({
            index: index_name,
            body: query,
        });    

        res.send(response.body.hits);
    } catch (e) {
        res.status(500).json(e);
    }
});

// route to search document
app.get('/delete-document', async (req, res) => {
    try {
        var response = await client.delete({
            index: index_name,
            id: '1',
        });

        res.send(response.body);
    } catch (e) {
        res.status(500).json(e);
    }
});

// route to delete index
app.get('/delete-index', async (req, res) => {
    try {
        var response = await client.indices.delete({
            index: index_name,
        });

        res.send(response.body);
    } catch (e) {
        res.status(500).json(e);
    }
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000!');
});