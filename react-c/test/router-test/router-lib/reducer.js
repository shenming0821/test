export default function reducer(state, action) {
    if (typeof state === "undefined") return {
        linkName: "about",
        users: [
            { name: "hehe" },
            { name: "haha" }
        ]
    };
    switch (action.type) {
        case 'link':
            return Object.assign({}, state, { linkName: action.payload.name })
        default:
            return state;
    }
}