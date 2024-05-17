import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

    export default function Compiler() {
        return (
            <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
            <HelperHeader/>
            <CodeEditor/>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>Right Side</ResizablePanel>
        </ResizablePanelGroup>
        )
    }
