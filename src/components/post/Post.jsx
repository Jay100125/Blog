import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://cdna.artstation.com/p/assets/images/images/053/417/540/large/dante-leapman-final-1.jpg?1662145194" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCats">Music</span>
                <span className="postCats">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor,</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione illum, quo veniam qui provident ut eos, tenetur officiis omnis doloremque autem dolore, laudantium eum quam vitae perferendis! Ipsum numquam animi molestiae illum saepe ab id eveniet eligendi aspernatur, tempore architecto voluptatem veritatis nisi maiores voluptatibus odio quaerat qui totam distinctio?</p>
    </div>
  )
}
