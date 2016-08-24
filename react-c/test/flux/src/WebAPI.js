module.exports = {
    getAll(callback){
        setTimeout(() => {
            callback(['aaa','bbb','ccc']); // localhsot/data.json
        }, 2000);
    }
}