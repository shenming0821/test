const Reflux = require('reflux');

const action = Reflux.createAction({

   click(){
       this.triggerAsync(' zengliang ');
   }

});

action.listen(data=> console.log('listen 1 ', data));
action.listen(data=> console.log('listen 2 ', data));

//action.trigger('leo');
//setTimeout(()=>action.trigger('zengliang'));

//action.triggerAsync('leo');

action.click();

console.log('----- end ----');
