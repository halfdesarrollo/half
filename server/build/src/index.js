"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./config/mongodb/db");
const initialSetUp_1 = require("./Lib/initialSetUp");
app_1.server.set('port', (process.env.PORT || 5000));
app_1.server.listen(app_1.server.get('port'), () => {
    console.log('app listening on port', app_1.server.get('port'));
    initialSetUp_1.createRoles;
});
