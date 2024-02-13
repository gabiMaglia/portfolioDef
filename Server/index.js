"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
var conn_1 = require("./src/db/conn");
var PORT = 3001;
conn_1.default.sync({ force: false }).then(function () {
    app_1.default.listen(PORT, function () {
        console.log("Server listening at ".concat(PORT, ", running on ").concat('DEV', "_DB enviroment"));
    });
});
exports.default = app_1.default;
