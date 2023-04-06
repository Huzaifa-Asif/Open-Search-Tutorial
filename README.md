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

##### To Run OpenSearch Functions 
To Execute the Functions run the following command
```
npm run createIndex
```

This will execute the createIndex() function. In the above command you can replace the function name with other function names to execute them. 

##### Functions Available. 
1. createIndex();
2. addDocument();
3. searchDocuments();
4. deleteDocument();
5. deleteIndex();
