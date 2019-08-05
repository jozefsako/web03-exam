/**
 * Imports
 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');



/**
 * Variables
 */
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = process.env.DB_DB;



/**
 * Connect to the database
 */
const connect = () => {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url);
        client.connect(function (err) {
            if (err) {
                console.log("[DB] Unable to connect to server: " + err.message);
                reject(err);
            } else {
                console.log("[DB] Connected successfully to server");
                exports.db = client.db(dbName);
                resolve(exports.db);
            }
        });
    });
};

/**
 * Ensure DB is in correct state for the Application
 */

const boot = () => {
    // ADD USER IN DB IF NONE IS PRESENT
    let collection = this.db.collection('users');
    collection.countDocuments().then((res) => {
        if (res === 0) {
            collection.insertOne({
                firstName: 'Alfred',
                lastName: 'Shaw',
                email: 'alfred.shaw49@example.com',
                password: 'piazza'
            }).catch((err) => {
                console.log('[App] Unable to insert default user');
            });
        }
    })
};

/**
 * Exports
 */
exports.connect = connect;
exports.boot = boot;
exports.db = null; // db will be set after connected;
exports.ObjectID = mongodb.ObjectID;