"use client"

import { PinturaComponentEvents, PinturaEditor } from "@pqina/react-pintura"
import {
  getEditorDefaults,
  ImageSource,
  PinturaDefaultImageWriterResult,
  PinturaEditorDefaultOptions
} from "@pqina/pintura"
import pinturaStyle from "@pqina/pintura/pintura.module.css"
import pinturaTheme from "./index.module.css"
import { useEffect, useState } from "react"

export function ImageEditor() {

  const options: PinturaEditorDefaultOptions = {
    enableDropImage: true,
    enablePasteImage: true,
    enableBrowseImage: true,
  }

  const downloadImage = (result: PinturaDefaultImageWriterResult) => {
    // 将处理后的图像保存为文件
    const file = result.dest

    // 创建一个下载链接
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = URL.createObjectURL(file)
    link.download = file.name

    // 触发下载
    document.body.appendChild(link)
    link.click()

    // 清理 URL 对象
    setTimeout(() => {
      URL.revokeObjectURL(link.href)
      link.parentNode?.removeChild(link)
    }, 0)
  }

  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) return <div className="h-full w-full flex items-center justify-center">Loading...</div>

  return (
    <PinturaEditor
      {...getEditorDefaults(options)}
      className={`${pinturaStyle.pintura} ${pinturaTheme.index}`}
      onProcess={downloadImage}
    />
  )
}