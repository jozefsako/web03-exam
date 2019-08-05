import sendApirequest from "../utils/api.js";

import taskIndex from "../components/tasks/index/container";

const create = ({ label }) => {

}

const retrieve = (id) => {
    const url = `/api/tasks/${id}`
    sendApirequest({
        url,
        method: "GET",
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

const retrieveAll = () => {
    sendApirequest({ url: "/api/tasks" })
        .then((res) => {
            console.log(res);
            taskIndex.setState({ tasks: res });
        })
        .catch((err) => {
            console.log(err);
        })
}

const update = ({ id, label }) => {
}

const destroy = (id) => {
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