#!/usr/bin/node

/***
 * This script will populate test entries in your firebase firestore for use for developing on the findadoc app.
 * See details in README.md.
 * */

require("dotenv").config({path: __dirname + '/../.env'});
const fs = require('fs').promises;
const firebase = require("firebase");
require('firebase/firestore');

const FIXTURES_DIR = __dirname + '/../fixtures/';

const fixtures = [
    {
        "collection" : "clinics",
        "file" : FIXTURES_DIR + 'clinics_collection_sample.json'
    },
    {
        "collection" : "pending",
        "file" : FIXTURES_DIR + 'pending_collection_sample.json'
    },
    {
        "collection" : "reports",
        "file" : FIXTURES_DIR + 'reports_collection_sample.json'
    },
    {
        "collection" : "users",
        "file" : FIXTURES_DIR + 'users_collection_sample.json'
    }
];

const initialize = () => {
    console.log(`Initializing using firebase API key ${process.env.FIREBASE_API_KEY}`)
    firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID
    });
}

const loadFixture = async (filepath) => {
    try {
        const json = await fs.readFile(filepath, "utf-8");
        return JSON.parse(json);
    }
    catch (e) {
        console.log(e.message);
    }
}

const storeToFirestore = async (collectionData, collectionName) => {
    try {
        const db = firebase.firestore();
        let count = 0;
        for (let item of collectionData) {
            let docRef = await db.collection(collectionName).add(item);
            console.log(`Successfully persisted to ${collectionName} as: ${docRef.id}`);
            count++;
        }
        console.log(`Successfully persisted ${count} documents to ${collectionName}.`);
    } catch (e) {
        console.log(e.message);
    }
}

const isProd = () => {
    let productionResourcesUsed = process.env.FIREBASE_PROJECT_ID == "findadoc-bc230" || process.env.FIREBASE_DATABASE_URL == "https://findadoc-bc230-default-rtdb.firebaseio.com";
    if(productionResourcesUsed) {
        console.log("You're currently using the production database. This script will exit with no changes to avoid data loss.")
    }
    return productionResourcesUsed;
}

const main = async () => {
    if (isProd()) { return }
    initialize();
    for (let fixture of fixtures) {
        let records = await loadFixture(fixture.file);
        storeToFirestore(records, fixture.collection);
    }
}

main();
