'use client';
import { legacy_createStore } from "redux";
import { reducers } from "./Reducer/index";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store =legacy_createStore(reducers, composeWithDevTools());
