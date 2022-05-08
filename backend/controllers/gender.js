const { default: axios } = require("axios");

const getGender = async (name) => {
    try {
        if (!name) return "No name provided"
        const res = await axios.get(`https://api.genderize.io/?name=${name}`);
        return (res.data);
    } catch (e) {
        console.log(e);
        return "Server Error"
    }
}

module.exports = { getGender }