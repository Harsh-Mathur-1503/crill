"use client"
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'

const Output = dynamic(async () => (await import('editorjs-react-renderer')).default,{
    ssr: false
})

interface EditorOutputProps {
  content:any
}

const style = {
    paragraph:{
        fontSize:'0.875rem',
        lineHeight:'1.25rem',
    }
}

const renderers = {
    image:CustomImageRendere,
    code:CustomCodeRenderer,
}

const EditorOutput: FC<EditorOutputProps> = ({content}) => {
  return(
    <Output className='text-sm' renderers={renderers} data={content} style={style} />
  )
}

function CustomImageRendere({data}:any){
    const src = data.file.url
    return(
        <div className='relative w-full min-h-[15rem]'>
            <Image alt='image' src={src} className='object-container' fill />
        </div>
    )
}

function CustomCodeRenderer({data}:any){

    return(
        <pre className='bg-gray-800 p-4 rounded-md'>
            <code className='text-gray-100 text-sm'>{data.code}</code>
        </pre>
    )
}

export default EditorOutput
