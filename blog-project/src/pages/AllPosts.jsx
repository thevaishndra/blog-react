import React, {useState, useEffect} from 'react'
import {Container, PostCard} from '../components'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='py-8' >
        <AllPosts/>
    </div>
  )
}

export default AllPosts