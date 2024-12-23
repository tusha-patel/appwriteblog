import React, { useEffect } from 'react';
import { PostCard, Container } from '../components';
import appWriteService from "../appwrite/config"
import { useState } from 'react';

const AllPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appWriteService.getPost([]).then((posts) => {
            console.log(posts);
            
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    return (
        <div className='w-full my-8'>
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts?.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default AllPost;
