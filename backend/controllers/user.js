const { default: axios } = require("axios");

const parser = (data) => {
    return {
        status: data.status, 
        headers: {
            date: data.headers.date, 
            server: data.headers.server, 
        }, 
        method: data.config.mehtod, 
        url: data.config.url, 
        user: data.data.results[0], 
        extraInfo: data.data.info
    }
}

const getRandomUser = async () => {
    try {
        let res = [];
        for(let i = 0; i < 10; i++)
        {
            const request = await axios.get('https://randomuser.me/api/');
            res.push(parser(request));  
        }
        return (res);
    } catch (e) {
        console.log(e);
        return "Server Error"
    }
}

module.exports = { getRandomUser }