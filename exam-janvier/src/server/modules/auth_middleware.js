/*
 1° RETRIEVE JWT SECRET FROM CONFIG
 2° VERIFY VALUE OF HEADER X-AUTHENTIFIED
 3° IF VALUE IS TRUE, FETCH USER FROM DB AND PUT IT IN req.user
 4° CALL next() WHEN JOB IS DONE
*/

const authMiddleware = (req) => {
   
    console.log("MIDDLEWARE");
    
    if (req.header('isAuthentified')) {
        console.log('je suis laaaaa');
        fetch("/api/users/me")
            .then(response => {
                return response.json();
            })
            .then(currentUser => {
                localStorage.setItem("user", currentUser.firstName);
            })
            .catch(error => {
                console.error(error);
            });
    }

}

module.exports = authMiddleware;