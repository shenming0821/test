
const Reflux = require('reflux');

const action = Reflux.createAction();

const store1 = Reflux.createStore({
  init(){
       this.data = {name:'',type:'store1'};
       this.listenTo(action,this.onChange);
  },
  onChange(newName){
       console.log('store1 name is ',newName);
       this.data.name = newName;
      this.trigger(this.data);
  }
})


const store2 = Reflux.createStore({
  init(){
       this.history = [];
       this.listenTo(store1,this.onChange);
  },
  onChange(data){
      this.history.push(data);
      console.log('store2\'s history length = ', this.history.length);
      this.trigger(this.history);
  }
});



action('leo1');
action('leo2');
action('leo3');
