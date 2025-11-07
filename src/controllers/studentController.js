import { json } from "node:stream/consumers";
import StudentService from "../services/studentService.js";
import { HTTP_STATUS_CODE } from "../constants/httpStatuts.js";

export default class StudentController {
    studentService;

    constructor() {
        this.studentService = new StudentService();
    }

    async read(req, res) {
        res.writeHead(200);
        res.end(JSON.stringify(await this.studentService.getAll()));
    }

    async create(req, res) {
        const data = await json(req);
        

        const newStudent = await this.studentService.create(data);

        console.log(newStudent)

        res.writeHead(201);
        res.end(JSON.stringify(newStudent));
    }

    async find(req, res) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = url.searchParams.get("id");

        const student = await this.studentService.get(id);

        if (!student) {
            res.writeHead(404);
            res.end(JSON.stringify({ "message": "Ressource not found" }));
            return;
        }

        res.writeHead(200);
        res.end(JSON.stringify(student));
    }

    



    async update(req, res) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = Number(url.searchParams.get("id"));

        const data = await json(req);

        const updatedStudent = this.studentService.update(id, data);

        if (!updatedStudent) {
            res.writeHead(404);
            res.end(JSON.stringify({ "message": "Ressource not found" }));
            return;
        }

        res.writeHead(200);
        res.end(JSON.stringify(updatedStudent));
    }

    delete(req, res) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = Number(url.searchParams.get("id"));

        const ok = this.studentService.delete(id);

        if (!ok) {
            res.writeHead(HTTP_STATUS_CODE.NO_CONTENT);
            res.end(JSON.stringify({ "message": "Ressource not found" }));
            return ;
        }

        res.writeHead(204);
        res.end("succes");
    }
}

























































// import { json } from "node:stream/consumers";
// import StudentService from "../services/studentService.js";

// export default class StudentController {
//     studentService ;
    
//     constructor(){
//         this.studentService = new StudentService();
//     }
    
    

//     async create(req, res){
//         // let body = "";
//         // req.on('data', (chunck) => {
//         //     body += chunck.toString();
            
//         // });

//         // req.on('close', () => {
//         //     console.log(JSON.parse(body));
            
//         // })
//         const {firstname, lastname, sexe, birth_day} = await json(req);
//         const student = {
//             'id': this.uuidGen.next().value,
//             'firstname' : firstname !== undefined ? firstname : "",
//             'lastname' : lastname !== undefined ? lastname : "",
//             'sexe' : sexe !== undefined ? sexe : "Masculin",
//             'birth_day' : birth_day !== undefined ? birth_day : "",
//         }
//         this.students.push(student);
        
//         res.end(JSON.stringify(this.students));
//     }

//     read(req, res){
//         res.writeHead(200);
//         res.end(JSON.stringify(this.studentService.getAll()));
//         //res.end(this.students);
//     }

//     async update(req, res) {
//         const url = new URL(req.url, `http://${req.headers.host}`);
//         const id = url.searchParams.get("id");

        
//         const student = this.students.find(s => s.id == id);
//         if (!student) {
//             res.writeHead(404);
//             res.end(JSON.stringify({ message: "Ressource not found" }));
//             return;
//         }

//         const data = await json(req);

        
//         student.firstname = data.firstname ?? student.firstname;
//         student.lastname = data.lastname ?? student.lastname;
//         student.sexe = data.sexe ?? student.sexe;
//         student.brith_day = data.brith_day ?? student.brith_day;

//         res.writeHead(200);
//         res.end(JSON.stringify(student));
//     }





//     delete(req, res){
//         const url = new URL(req.url, `http://${req.headers.host}`);
//         const id = url.searchParams.get("id");  

//         let student ;

//         this.students.forEach(element => {
//             if (element.id==id) {
//                 this.students = this.students.filter(elmt => elmt.id !== id);
//             }
//         });

//         if (student===undefined) {
//             res.writeHead(404);
//             res.end(JSON.stringify({
//                 "message":"Ressource note found"
//             }));
//         } else {
//             res.writeHead(200);
//             res.end(JSON.stringify(students));
        
//     }
//     }

//     find(req, res){
//         const url = new URL(req.url, `http://${req.headers.host}`);
//         const id = url.searchParams.get("id");  

//         let student ;

//         this.students.forEach(element => {
//             if (element.id==id) {
//                 student = element;
//             }
//         });

//         if (student===undefined) {
//             res.writeHead(404);
//             res.end(JSON.stringify({
//                 "message":"Ressource note found"
//             }));
//         } else {
//             res.writeHead(200);
//             res.end(JSON.stringify(student));
//         }  
        
//     }
// }

