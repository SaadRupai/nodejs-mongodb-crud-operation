var MongoClient = require('mongodb').MongoClient;

let URL = "mongodb://127.0.0.1:27017/";

MongoClient.connect(URL, (error, myMongoClient) => {
    try {
        console.log("Database Connected Successfully!");
        createMyCollection(myMongoClient);
        // inserData(myMongoClient);
        // deleteOneData(myMongoClient);
        // deleteAllData(myMongoClient);
        // findOneData(myMongoClient);
        // findAllData(myMongoClient);
        // findProjectedData(myMongoClient);
        // findQueryData(myMongoClient);
        // findLimitedData(myMongoClient);
        // sortfetchedData(myMongoClient);
        // updateMyData(myMongoClient);
        // deleteMyCollection(myMongoClient);
    }
    catch (error) {
        console.log("Database Couldn't Connect!");
        console.log(error);
    }
});



// collection creation
function createMyCollection(myMongoClient) {

    let myDB = myMongoClient.db('c-company');

    //creating new collection named employees
    myDB.createCollection("employees", (error, result) => {
        try {
            console.log("Collection created successfully!");
            console.log(result);
        }
        catch (error) {
            console.log("Collection creation failed!");
            console.log(error);
        }
    });

    // creating this collection for further delete collection purpose
    // myDB.createCollection("staff", (error, result) => {
    //     try {
    //         console.log("Collection created successfully!");
    //         console.log(result);
    //     }
    //     catch (error) {
    //         console.log("Collection creation failed!");
    //         console.log(error);
    //     }
    // });
}



// insert data
function inserData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // insert object
    // let insertobj = { name: "Sakib", id: "1703089", city: "Tangail", phone: "987457412" };
    // let insertobj = { name: "Emon", id: "1703070", city: "Rajshahi", phone: "965253247" };
    let insertobj = { name: "Saad", id: "1703069", city: "Rajshahi", phone: "987453247" };

    // inserting data into collection
    myCollection.insertOne(insertobj, (error, result) => {
        try {
            console.log("Data insert successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data insertion failed!");
            console.log(error);
        }
    });
}



// delete single data  (with condition)
function deleteOneData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // delete data with condition
    let myConditon = { id: "1703070" };

    // deleting single data from collection
    myCollection.deleteOne(myConditon, (error, result) => {
        try {
            console.log("Data deletion successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data deletion failed!");
            console.log(error);
        }
    });

}



// delete all data
function deleteAllData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // deleting all data from collection
    myCollection.deleteMany((error, result) => {
        try {
            console.log("Data deletion successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data deletion failed!");
            console.log(error);
        }
    });
}



// find single data  (with condition)
function findOneData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // condition for finding data
    let findobj = { id: "1703069" };

    // finding single data from collection
    myCollection.findOne(findobj, (error, result) => {
        try {
            console.log("Data finding successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data finding failed!");
            console.log(error);
        }
    });
}



// find all data
function findAllData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // finding all data from collection
    myCollection.find().toArray((error, result) => {
        try {
            console.log("Data finding successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data finding failed!");
            console.log(error);
        }
    });
}



// find data with projection
function findProjectedData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // projection for finding data
    let myobj = {};
    let myProjection = { projection: { city: 1, id: 1 } };

    // finding projecting data from collection
    myCollection.find(myobj, myProjection).toArray((error, result) => {
        try {
            console.log("Data finding successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data finding failed!");
            console.log(error);
        }
    });
}




// find query data
function findQueryData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // query for finding data
    let myQuery = { id: "1703069", city: "Rajshahi" };

    // finding query data from collection
    myCollection.find(myQuery).toArray((error, result) => {
        try {
            console.log("Data quering successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data quering failed!");
            console.log(error);
        }
    });
}



// find limited data
function findLimitedData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // finding limited data from collection
    myCollection.find().limit(2).toArray((error, result) => {
        try {
            console.log("Data limiting successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data limiting failed!");
            console.log(error);
        }
    });
}



// sorting fetched data from collection
function sortfetchedData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // sorting order
    let mySortOrder = { id: 1 }

    // sorting fetched data from collection
    myCollection.find().sort(mySortOrder).toArray((error, result) => {
        try {
            console.log("Data sorting successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data sorting failed!");
            console.log(error);
        }
    });
}



// update data
function updateMyData(myMongoClient) {

    let myDB = myMongoClient.db('c-company');
    let myCollection = myDB.collection('employees');

    // update information
    let myQuery = { id: "1703069" };
    let updatedData = { $set: { city: "Rangpur" } };

    // updating data from collection
    myCollection.updateOne(myQuery, updatedData, (error, result) => {
        try {
            console.log("Data sorting successfull!");
            console.log(result);
        }
        catch (error) {
            console.log("Data sorting failed!");
            console.log(error);
        }
    });
}



// delete collection
function deleteMyCollection(myMongoClient) {

    let myDB = myMongoClient.db('c-company');

    //deleting collection
    myDB.dropCollection('staff', (error, result) => {
        try {
            console.log("Collection deleted successfully!");
            console.log(result);
        }
        catch (error) {
            console.log("Collection deletion failed!");
            console.log(error);
        }
    });
}




