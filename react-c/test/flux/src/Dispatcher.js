// 类似于事件总线 注册store  每接收一个action就分发给一个或多个store
const storeCallbackList = [];
const middlewareList = [];

module.exports = {
    register(storeCallback){ // 注册
       storeCallbackList.push(storeCallback);
    },

    _dispatch(action){  // 分发 //调用所有的function把action传进去
        for (let callback of storeCallbackList){
            callback(action);
        }
    },

    use(middleware){ // 添加至中间件
        middlewareList.push(middleware);
        return this;
    },


    // 可在中间件中做一些处理
    dispatch(action){

        let index = -1;
        let _self = this;

        function next() {
            const middle = middlewareList[++index];
            if (middle) {
                middle(action,next);
            } else {
                _self._dispatch(action);
            }
        }

        next();
    }

};