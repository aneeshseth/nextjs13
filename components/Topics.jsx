import React from 'react'
import Remove from './Remove'
import Link from "next/link";
const getTopics = async () => {
    const res = await fetch("http://localhost:3001/api/topics", {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error("failed fetch")
    }
    return res.json()
}
async function Topics() {
  const {topics} = await getTopics()
  return (
    <>
    {topics.map((t)=>(
        <div key={t._id}>
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <h2>{t.description}</h2>
        </div>
        <div className="flex gap-2">
            <Remove id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>edit</Link>
        </div>
       </div>
       </div>
    ))}
   </>
  )
}

export default Topics