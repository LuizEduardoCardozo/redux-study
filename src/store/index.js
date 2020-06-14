import { createStore } from 'redux'


const initialState = {

    activeLesson: {},
    activeModule: {},

    module: [{
            id: 1, 
            title: 'Inicio do curso', 
            lessons: [
                {id: 1, title: 'Aula 1'},
                {id: 2, title: 'Aula 2'},
                {id: 3, title: 'Aula 3'},
            ],
        },
        {
            id: 2, 
            title: 'Começando a pegar o jeito!', 
            lessons: [
                {id: 4, title: 'Aula 4'},
                {id: 5, title: 'Aula 5'},
                {id: 6, title: 'Aula 6'},
            ],
        },    
        {
            id: 3, 
            title: 'Tentando algo mais dificil dessa vez!', 
            lessons: [
                {id: 7, title: 'Aula 7'},
                {id: 8, title: 'Aula 8'},
                {id: 9, title: 'Aula 9'},
            ],
        },

    ]};
    

function reducer(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case 'TOGGLE_LESSION':
            return {...state, activeLesson: action.lesson, activeModule: action.module };
        default:
            return {...state};
    }
}

const store = createStore(
    reducer,
);

export default store;