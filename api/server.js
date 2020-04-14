const express = require("express");

const db = require("../data/dbConfig.js");

const accountrouter = require("../accountrouter");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountrouter);

module.exports = server;
