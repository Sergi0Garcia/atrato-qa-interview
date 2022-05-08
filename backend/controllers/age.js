const { default: axios } = require("axios");

const getAge = async (name) => {
    try {
        if (!name) return "No name provided"
        const res = await axios.get(`https://api.agify.io/?name=${name}`);
        return (res.data);
    } catch (e) {
        console.log(e);
        return "Server Error"
    }
}

module.exports = { getAge }