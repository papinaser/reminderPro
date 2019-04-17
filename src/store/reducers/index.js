import {ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL} from "../../constants";
import {bake_cookie, read_cookie} from "sfcookies";

const initialState = [];

const reminder = (action) => {
    const {text, dueDate} = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
};
const onDeleteReminder = (state = [], id) => {
    return state.filter(rem => rem.id !== id);
};
const reminerReducer = (state = initialState, action) => {
    let newState = null;
    state = read_cookie("reminders");
    switch (action.type) {
        case ADD_REMINDER:
            newState = [...state];
            newState.push(reminder(action));
            bake_cookie("reminders", newState);
            return newState;
        case DELETE_REMINDER:
            newState = onDeleteReminder(state, action.id);
            bake_cookie("reminders", newState);
            return newState;
        case CLEAR_ALL:
            newState = [];
            bake_cookie("reminders", newState);
            return newState;
        default:
            return state;

    }
};

export default reminerReducer;