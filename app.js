const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
    node: "https://admin:admin@localhost:9200"
});
const index_name = 'books';

// method to create index
async function createIndex() {
    console.log("createIndex")
    const settings = {
        settings: {
          index: {
            number_of_shards: 4,
            number_of_replicas: 3,
          },
        },
      };

    const response = await client.indices.create({
        index: index_name,
        body: settings,
    });

    console.log("createIndex response: ", response);
}

// method to add document in index 
async function addDocument() {
    const document = {
        title: 'The Outsider',
        author: 'Stephen King',
        year: '2018',
        genre: 'Crime fiction',
    };
    const id = '5';

    const response = await client.index({
        id: id,
        index: index_name,
        body: document,
        refresh: true,
    });

    console.log("add document to index response: ", response.body);
}

// method to search documents
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

    console.log("search documents response: ", response.body.hits);
}

// method to delete document
async function deleteDocument() {
    var response = await client.delete({
        index: index_name,
        id: '1',
    });

    console.log("delete Document response: ", response.body);
}

// methid to delete index
async function deleteIndex() {
    var response = await client.indices.delete({
        index: index_name,
    });
    console.log("delete Index response: ", response.body);
}

createIndex();
addDocument();
searchDocuments();
deleteDocument();
deleteIndex();