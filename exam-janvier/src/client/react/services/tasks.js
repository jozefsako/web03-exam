import sendApirequest from "../utils/api.js";

const create = ({ label }) => {
    console.log("create()");
}

const retrieve = (id) => {
    console.log("retrieve()");
    const url = `/api/tasks/${id}`
    sendApirequest({
        url,
        method: "GET",
    })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
}

const retrieveAll = () => {
    console.log("retrieveAll()");
    sendApirequest({ url: "/api/tasks" })
        .then((res) => {
            localStorage.setItem("tasks", res);
            return res;
        })
        .catch((err) => {
            console.log(err);
            localStorage.setItem("tasks", []);
        })
}

const update = ({ id, label }) => {
    console.log("update()");
}

const destroy = (id) => {
    console.log("destroy()");
    const url = `/api/tasks/${id}`
    sendApirequest({
        url,
        method: "DELETE",
    })
}

const service = {
    create,
    retrieve,
    retrieveAll,
    update,
    destroy,
};

export default service;