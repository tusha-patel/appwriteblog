import React, { useEffect } from 'react';
import { PostForm, Container } from '../components';
import appWriteServices from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';



const EditPost = () => {
    const [posts, setposts] = useState(null);
    let { slug } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appWriteServices.getPost(slug).then((post) => {
                if (post) {
                    setposts(post)
                }
            })
        } else {
            navigate("/");
        }
    })

    return posts ? (
        <div className="py-8">
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
    ):null;

}

export default EditPost;
