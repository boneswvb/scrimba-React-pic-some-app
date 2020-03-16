import React, {useState} from "react"

function Image({className, img}) {
	const [hovered, setHovered] = useState(false)
	
  return (
    <div className={`${className} image-container`}>
      <img 
      	onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} 
      	src={img.url} 
      	alt="Images for sale" className="image-grid"/>
    </div>
  )
}

export default Image
