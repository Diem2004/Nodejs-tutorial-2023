import { body, validationResult } from "express-validator";
import HttpStatusCode from "../exceptions/HttpStatusCode.js"
async function getAllStudents(req, res) {
  res.status(HttpStatusCode.HttpStatusCode.OK).json({
    message: 'Get student sucessfully',
    data: [
      {
        name: "Nguyen Van A",
        email: "nguyenvana@gmail.com",
        age: 18,
      },
      {
        name: "Anna",
        email: "anna@gmail.com",
        age: 20,
      },
      {
        name: "thomas",
        email: "thomas@gmail.com",
        age: 17,
      },
    ],
  });
  // res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
  //   messages: "get all student suscessfull",
  // });
}
async function getStudentById(req, res) {}
async function updateStudent(req, res) {}
async function insertStudents(req, res) {}
export default {
  getAllStudents,
  getStudentById,
  updateStudent,
  insertStudents,
};
