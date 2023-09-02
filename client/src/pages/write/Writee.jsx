import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
      className="writeImg" src="https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg" alt="" />
        <form action="" className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
          </div>
          <div className="writeFormGroup">
            <textarea type="text" placeholder="Tell your story..." className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
        
    </div>
  )
}
