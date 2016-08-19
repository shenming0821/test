module.exports = {
    getAll(callback){
        setTimeout(function(){
             callback(['aaa','bbb','ccc']); //  localhost/data.json
        },2000);
    }

};