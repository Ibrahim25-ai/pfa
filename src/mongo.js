const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://abir_ibra_med:projetPFA@projetpfa.duqszwb.mongodb.net/?retryWrites=true&w=majority";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client);
        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here
async function createListing(client, newListing){
    const result = await client.db("Farmers").collection("landPlots").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);    
}
async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client) {
    const cursor = client.db("Farmers").collection("landPlots").find();

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found listing(s) with at least :`);
        results.forEach((result, i) => {
        

            console.log();
            console.log(` geo loc: ${result.geo_loc}`);
            console.log(`   sail type: ${result.sail_type}`);
            console.log(`   number of trees: ${result.num_trees}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
}