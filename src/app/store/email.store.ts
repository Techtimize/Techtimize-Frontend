import {create } from 'zustand';
import { devtools,persist } from 'zustand/middleware';

interface EmailState{
    email: string;
    fullname:string;
}