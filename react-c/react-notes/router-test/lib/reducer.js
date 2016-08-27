export default function reducer(state,action){
    if(typeof state === "undefined") return {
        linkName:"about",
        users:[
            {name:"leo"},
            {name:"zengliang"}
        ]
    };
    switch(action.type){
        case "link":
            return Object.assign({},state,{linkName:action.payload.name})
        default: return state;
    }
}