import React from 'react';
import { Link } from 'react-router-dom';
import appWriteServices from '../appwrite/config'

const PostCard = ({ $id, title, featuredImage, }) => {
    return (
        <div>
            <Link to={`/post/${$id}`} >
                <div className="w-full bg-gray-100 rounded-xl p-4">
                    <div className="w-full justify-center mb-4 ">
                        <img src={appWriteServices.getFilePreview(featuredImage)} alt={title} className='rounded-xl aspect-square object-cover  ' />
                    </div>
                    <h2 className='text-xl font-bold '> {title} </h2>
                </div>
            </Link>
        </div>
    );
}

export default PostCard;
