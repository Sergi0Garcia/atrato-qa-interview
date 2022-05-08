const { default: axios } = require("axios");

const getNationality = async (name) => {
    try {
        if (!name) return "No name provided"
        const res = await axios.get(`https://api.nationalize.io/?name=${name}`);
        return (res.data);
    } catch (e) {
        console.log(e);
        return "Server Error"
    }
}

module.exports = { getNationality }