import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelperHeader() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-2">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
        >
          <Save />
          Save
        </Button>
        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
        >
          <Share2 size={16} />
          Share
        </Button>
      </div>
      <div className="__tab_switcher">
        <Select defaultValue="html" onValueChange={(value)=>console.log(value)}>
          <SelectTrigger className="w-[180px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
