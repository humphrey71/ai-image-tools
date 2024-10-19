
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Crop,
    Expand,
    FileArchive,
    FileDown,
    FlipHorizontal,
    GitCompareArrows,
    Images,
    Paintbrush,
    Palette,
    RotateCw,
    Scaling,
    ScissorsLineDashed,
    SlidersHorizontal,
    SmilePlus,
    Sparkles,
    SunMedium,
    Type,
    Wand2,
    Wrench
} from "lucide-react"
import { BsNoiseReduction } from "react-icons/bs"
import { IoIosColorFilter } from "react-icons/io"
import { MdGroupRemove } from "react-icons/md"
import { PiSelectionBackground } from "react-icons/pi"

{/* 
                <div className="sm:hidden lg:flex lg:flex-col lg:w-1/5 mt-8 lg:mt-0 gap-4">
                    <ToolCategory title="Basic Tools" tools={basicTools} />
                    <ToolCategory title="AI Tools" tools={aiTools} />
                </div>
                <div className="sm:block lg:hidden lg:w-1/5 mt-8 lg:mt-0">
                </div>
                 */}
export function ToolCategory({ title, tools }: { title: string, tools: { icon: React.ReactNode, title: string }[] }) {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold">{title}</h3>
            <div className="grid grid-cols-4 gap-2">
                {tools.map((tool, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon">
                                    {tool.icon}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{tool.title}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    )
}


export const basicTools = [
    { icon: <Crop className="h-4 w-4" />, title: "Crop" },
    { icon: <Scaling className="h-4 w-4" />, title: "Resize" },
    { icon: <RotateCw className="h-4 w-4" />, title: "Rotate" },
    { icon: <FlipHorizontal className="h-4 w-4" />, title: "Flip" },
    { icon: <Images className="h-4 w-4" />, title: "Merge Images" },
    { icon: <ScissorsLineDashed className="h-4 w-4" />, title: "Split Images" },
    { icon: <FileDown className="h-4 w-4" />, title: "Conversion" },
    { icon: <FileArchive className="h-4 w-4" />, title: "Compression" },
    { icon: <Type className="h-4 w-4" />, title: "Text" },
    { icon: <SmilePlus className="h-4 w-4" />, title: "Stickers" },
    { icon: <SlidersHorizontal className="h-4 w-4" />, title: "Adjustments" },
    { icon: <Palette className="h-4 w-4" />, title: "Color Correction" },
]


export const aiTools = [
    { icon: <Wand2 className="h-4 w-4" />, title: "Auto Retouch" },
    { icon: <PiSelectionBackground className="h-4 w-4" />, title: "Background Removal" },
    { icon: <MdGroupRemove className="h-4 w-4" />, title: "Object Cropping" },
    { icon: <Expand className="h-4 w-4" />, title: "Image Upscaling" },
    { icon: <GitCompareArrows className="h-4 w-4" />, title: "Style Transfer" },
    { icon: <Paintbrush className="h-4 w-4" />, title: "Colorization" },
    { icon: <Sparkles className="h-4 w-4" />, title: "Beautify" },
    { icon: <Wrench className="h-4 w-4" />, title: "Repair" },
    { icon: <BsNoiseReduction className="h-4 w-4" />, title: "Denoise" },
    { icon: <IoIosColorFilter className="h-4 w-4" />, title: "Filters" },
    { icon: <SunMedium className="h-4 w-4" />, title: "Enhance" },
]