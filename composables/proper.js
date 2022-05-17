import {useState} from "nuxt/app";

export const useProper = () => useState('proper', () => ({
    time: Date.now(),
    value: Math.random()
}))
