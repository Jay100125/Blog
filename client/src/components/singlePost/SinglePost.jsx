
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://cdna.artstation.com/p/assets/images/images/053/417/540/large/dante-leapman-final-1.jpg?1662145194" alt="" className="singlePostImg" />
        </div>
        <h1 className="singlePostTitle">
            Lorem, ipsum dolor.
            <div className="singlePostEdit">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Safak</b></span>
          <span className="singlePostDate">Author: <b>1 hout ago</b></span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse vel ea nostrum voluptate quod totam, voluptatibus quam eum reprehenderit, dolor odit dolore quidem ipsam illo quasi omnis consequatur praesentium officia est facere harum saepe eaque. Sapiente excepturi laborum temporibus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nisi cupiditate? Earum ducimus reprehenderit mollitia culpa voluptatem adipisci dolor sequi, consectetur iusto repellendus est id maiores unde cupiditate vel rerum et ab voluptate reiciendis modi rem iste! Delectus mollitia officia autem numquam? Aspernatur amet ex iste eveniet, ullam aperiam adipisci.
        </p>
    </div>
  )
}
