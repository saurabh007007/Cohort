"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neondb_owner:4KJlNvbcekU9@ep-sweet-moon-a5myuca8.us-east-2.aws.neon.tech/neondb?sslmode=requir");
const pgClient2 = new pg_1.Client({
    user: "neondb_owner",
    password: "4KJlNvbcekU9",
    port: 5432,
    host: "ep-sweet-moon-a5myuca8.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true,
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const resposne = yield pgClient.query("SELECT * FROM users;");
        console.log(resposne.rows);
    });
}
main();
