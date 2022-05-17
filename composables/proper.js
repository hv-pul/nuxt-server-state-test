import {useState} from "nuxt/app";

export const useProper = () => useState('proper', () => 'foo')
