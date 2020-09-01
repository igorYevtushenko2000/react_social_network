let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'google'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action){
        //action == object
        //type: 'ADD-POST'
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.callSubscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-PAGE'){
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state);
        }
    },

    callSubscriber() {
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this.callSubscriber(this._state);
    // },
    //
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this.callSubscriber(this._state);
    // }
}
window.store = store;

export default store;

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-PAGE', newText: text}
}
