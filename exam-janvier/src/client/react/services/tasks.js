import sendApirequest from "../utils/api.js";

const create = ({ label }) => {
    console.log("create()");
    console.log("label => " + label);
    let obj = { content : label };
    return sendApirequest({
        url: "/api/tasks",
        method: "POST",
        params: obj,
    })
}

const retrieve = (id) => {
    console.log("retrieve()");
    const url = `/api/tasks/${id}`
    return sendApirequest({ url });
}

const retrieveAll = () => {
    console.log("retrieveAll()");
    return sendApirequest({ url: "/api/tasks" });
}

const update = ({ id, label }) => {
    console.log("update()");
}

const destroy = (id) => {
    console.log("destroy()");
    return sendApirequest({
        url: "/api/tasks/delete/" + id,
        method: "PUT"
    });
}

const service = {
    create,
    retrieve,
    retrieveAll,
    update,
    destroy,
};

export default service;