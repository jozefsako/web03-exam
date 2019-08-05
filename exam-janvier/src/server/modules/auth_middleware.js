/*
 1° RETRIEVE JWT SECRET FROM CONFIG
 2° VERIFY VALUE OF HEADER X-AUTHENTIFIED
 3° IF VALUE IS TRUE, FETCH USER FROM DB AND PUT IT IN req.user
 4° CALL next() WHEN JOB IS DONE
*/

const authMiddleware = () => { 
    console.log("je suis dans le middleware");
}


module.exports = authMiddleware;