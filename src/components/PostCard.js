import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
//$id is because of appwrite
function PostCard({
    $id,title,featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-yellow-100 rounded-xl
        p-4 max-w-sm overflow-hidden shadow-lg m-4'>
           <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
               <img src={appwriteService.getFilePreview(featuredImage)}
               alt={title}
               className='w-full h-48 object-cover'/>
           </div>
           <div className="px-6 py-4 ">
               <div className="font-bold text-xl mb-2 text-black">{title}</div>
           </div>
        </div>
    </Link>
  )
}

export default PostCard
