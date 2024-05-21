import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const currentCode = useSelector(
    (state: RootState) => state.compilerSlice.currentCode
  );

  const dispatch = useDispatch();
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((value: string) => {
    // console.log('val:', val);
    // setValue(val);
  }, []);
  return (
    <CodeMirror
      value={currentCode}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
