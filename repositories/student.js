const getAllStudents = async({
    page, 
    size,
    searchString
}
) => {
    console.log('get all students with paging')
}
//languages:['english-vietnamese']
const insertStudent = async ({
    name, email, languages, gender, phoneNumber, address
}) => {
        console.log('insert student')
}
export default {
    getAllStudents,
    insertStudent
}