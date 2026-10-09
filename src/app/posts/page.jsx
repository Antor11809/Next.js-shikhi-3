import React from 'react';

const Postpage = async() => {
const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
const posts = await res.json();
    return (
        <div>
            <p> পোস্টের সংখ্যা : {posts.length}</p>
        </div>
    );
};

export default Postpage;

