const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
    node: "https://admin:admin@localhost:9200"
});
const index_name = 'books';

async function createIndex() {
    const response = await client.indices.create({
        index: index_name
    });
    console.log("createIndex response: ", response);
}

async function addDocuments() {
    const document = {
        title: 'The Outsider 5',
        author: 'Stephen King 5',
        year: '5018 5',
        genre: 'Crime fiction 5',
    };
    const id = '5';
    const response = await client.index({
        id: id,
        index: index_name,
        body: document,
        refresh: true,
    });
    console.log("addDocuments response ", response.body);
}

async function searchDocuments() {
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

    console.log("searchDocuments response: ", response.body.hits);
}

async function deleteDocument() {
    var response = await client.delete({
        index: index_name,
        id: '1',
    });

    console.log("deleteDocument response: ", response.body);
}

async function deleteIndex() {
    var response = await client.indices.delete({
        index: index_name,
    });

    console.log("deleteIndex response: ", response.body);
}