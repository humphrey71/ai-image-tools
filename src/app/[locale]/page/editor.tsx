import { ImageEditor } from "@/components/pintura/image-editor"

export function EditorSection() {
    return (
        <section id="editor" className="my-12 min-h-[700px] h-screen p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <ImageEditor />
        </section>
    )
}