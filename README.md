# OpenSearch Project with Node.js

#### OpenSearch
AWS OpenSearch is a highly scalable open-source platform for search and analytics, It has a broad range of use cases. Data can be ingested from various sources and quickly searched, analyzed, and visualized. Prominent use cases include log analytics, application monitoring, anomaly detection, and website search.

#### How To Run Project locally

##### To Run Opensearch Service
To Run OpenSearch Service Locally, the best option is to use Docker for it, so in case you do not have Docker installed in your system then go to the provided link to download it first.
Link: https://www.docker.com/products/docker-desktop/

Run the command to build and run OpenSearch Locally
```
docker compose up 
```
Once the service is up and running then go to the following URL: http://localhost:5601/ 
Username: admin | Password: admin

##### To Run Node.js Project
Run the command to install packages.
```
npm install
```

Run the command to start the node project
```
npm run start
```

###### To Execute the different Open Search Functions go to the following routes:
Create Index: http://localhost:3000/create-index
Add Document: http://localhost:3000/add-document
Search Documents: http://localhost:3000/search-documents
Delete Document: http://localhost:3000/delete-document
Delete Index: http://localhost:3000/delete-index