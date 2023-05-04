import { nanoid } from "nanoid"
import { createSlice } from "@reduxjs/toolkit"


const Arr = [
    {
        id: "",
        title: "Add to title list",
        note: "You can choose color while adding to notes",
        color: "rgba(255,255,234)",
    },
];

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        value: JSON.parse(localStorage.getItem("notes")) || Arr
    },

    reducers: {
        //!! Add to notes collection
        addNote: (state, action) => {
            state.value.push({
                id: nanoid(),
                title: action.payload.title,
                note: action.payload.note,
                color: action.payload.color,
            });
            localStorage.setItem("notes", JSON.stringify(state.value));
        },

        //! Delete the notes
        removeNote: (state, action) => {

            if (window.confirm("Are you sure you want to delete?")) {
                console.log(action.payload.id);
                state.value = state.value.filter((n) => n.id === action.payload);
                localStorage.setItem('notes', JSON.stringify(state.value));
            }

        },

        //! Filters Notes 

        filterNotes: (state,action) => { 
            state.value = JSON.parse(localStorage.getItem('notes') )|| Arr;
            let array = state.value;
            state.value =array.filter(
                (n) => n.title.includes(action.payload) || n.note.includes(action.payload)
            )
        }

    }
})
export const { addNote, removeNote, filterNotes } = noteSlice.actions;

export default noteSlice.reducer;