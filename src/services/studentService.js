import uuid from "../generateur.js";
import Database from "../config/database.js";

export default class StudentService {
    students = [
        {
            id: 100,
            firstname: "Aliya",
            lastname: "ABDOULAYE",
            sexe: "Feminin",
            birth_day: "31/10/2006",
        }
    ];

    uuidGen;

    constructor() {
        this.uuidGen = uuid(101);
    }

    async getAll() {
        const db = await Database.getDatabaseInstance();
        return db.connection.all("SELECT * FROM students");
        
        
       //return this.students;
    }

    async create(data) {
    const db = await Database.getDatabaseInstance();
    const sexe = data.sexe?.trim() === "Feminin" ? "Feminin" : "Masculin";

    const result = await db.connection.run(
        `INSERT INTO students (firstname, lastname, sexe, birth_day)
         VALUES (:firstname, :lastname, :sexe, :birth_day)`,
        {
            ":firstname": data.firstname ?? "",
            ":lastname": data.lastname ?? "",
            ":sexe": sexe,
            ":birth_day": data.birth_day ?? ""
        }
        
    );

    return await db.connection.get(
        "SELECT * FROM students WHERE id = :id",
        { ":id": result.lastID }
    );
}


    
    async get(id) {
         const db = await Database.getDatabaseInstance();
         return await db.connection.get(
            "SELECT * FROM students WHERE id = :student_id",
            { ":student_id": id }
);

    }
    

    update(id, data) {
        const student = this.get(id);
        if (!student) return null; 

        
        student.firstname = data.firstname ?? student.firstname;
        student.lastname = data.lastname ?? student.lastname;
        student.sexe = data.sexe ?? student.sexe;
        student.birth_day = data.birth_day ?? student.birth_day;

        return student;
    }

    
    delete(id) {
        const student = this.get(id);

        
        const index = this.students.indexOf(student);

        if (index !== -1){
            this.students.splice(index, 1)
        }
    }
}




































