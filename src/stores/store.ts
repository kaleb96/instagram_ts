import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {

//state

//functions

//1. validate Email
const validate = (email: string)=> {
    
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
    return {
        validate
    }
})
