import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
    const fullcode = useSelector((state: RootState)=>state.compilerSlice.fullCode)
  return 
  <div>
    <iframe/>
  </div>;
}
