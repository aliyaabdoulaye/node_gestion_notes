import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export default class Database {
    connection;
    static instance;
    static dbPath = "./src/db.sqlite";

    constructor() {}

    static async getDatabaseInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
            await Database.instance.openDb(Database.dbPath);
        }
        return Database.instance;
    }

    async openDb(db_path) {
        this.connection = await open({
            filename: db_path,
            driver: sqlite3.Database
        });
        await this.initDB();
    }

    async initDB() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const ddlSql = await fs.readFile(
            path.join(__dirname, 'ddl.sql'),
            { encoding: 'utf8' }
        );

        await this.connection.exec(ddlSql);

        const dmlSql = await fs.readFile(
            path.join(__dirname, 'dml.sql'),
            { encoding: 'utf8' }
        );

        await this.connection.exec(dmlSql);

        console.log(" Base de données initialisée !");
    }
}

   



    





















