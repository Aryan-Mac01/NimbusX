import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { act } from "react";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript ";
  currentCode: string;
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: "This is HTML Code",
    css: "This is CSS Code",
    javascript: "This is JS Code",
  },
  currentLanguage: "html",
  currentCode: "",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (
      state,
      action: PayloadAction<{
        language: CompilerSliceStateType["currentLanguage"];
        code: string;
      }>
    ) => {
      const { code, language } = action.payload;
      state.fullCode[language] = code;
    },
    updateCurrentCode: (state, action: PayloadAction<string>) => {
      state.currentCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateCurrentCode } =
  compilerSlice.actions;
