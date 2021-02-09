import { useEffect, useState } from 'react'
import axios from 'axios'
import { Nullable } from '../types/utility.types'

export function useFileLoader(url: string) {
  const [file, setFile] = useState<Nullable<File>>(null)
  const [preview, setPreview] = useState<Nullable<string>>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // if (preview !== null) {
    //   URL.revokeObjectURL(preview)
    // }
    if (file !== null) {
      setPreview(URL.createObjectURL(file))
    }
  }, [file])

  async function onUpload() {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      return await axios({
        url,
        onUploadProgress,
        method: 'POST',
        data: formData,
      })
    }
  }

  function onSelect(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFile(event.target.files[0])
      setPreview(null)
    }
  }

  function onUploadProgress(event: ProgressEvent<HTMLInputElement>) {
    const totalLength = event.total

    if (totalLength) {
      setProgress(Math.round((event.loaded * 100) / totalLength))
    }
  }

  function onClear() {
    setPreview(null)
    setFile(null)
    setProgress(0)
  }

  return {
    preview,
    isLoading,
    progress,
    onUpload,
    onSelect,
    onClear,
    setPreview,
  }
}
