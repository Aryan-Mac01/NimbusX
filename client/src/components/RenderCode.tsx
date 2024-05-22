import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const fullcode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const combinedCode = `
  <html>
    <style>
    ${fullcode.css}
    </style>
    <body>
    ${fullcode.html}
    </body>
    <script>
    ${fullcode.javascript}
    </script>
  </html>
  `;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`
  return(
  <div className="bg-white h-[calc(100dvh-60px)]">
    <iframe className="w-full h-full" src={iframeCode}/>
  </div>
  );
}
