import RectangularImage from "./RectangularImage"
import RevealOnScroll from "./RevealOnScroll"

interface props {
    img: string,
    message: string,
    dir: string,
}

const TimelineComp = ({img, message, dir} : props) => {
  if (dir === "right")
  return (
    <div className='grid grid-cols-3 justify-items-center items-center '>
      <RevealOnScroll className="small-text-bg justify-center items-center">
        <p>{message}</p>
      </RevealOnScroll>
      <div>
        <div className="bg-white w-[50px] h-[600px]"/>
      </div>
      <RevealOnScroll className="flex justify-center items-center">
        <RectangularImage src={img} size="medium" />
      </RevealOnScroll>
    </div>
  )
  else return (
    <div className='grid grid-cols-3 justify-items-center items-center'>
      <RevealOnScroll className="flex justify-center items-center">
      <RectangularImage src={img} size="medium" />
      </RevealOnScroll>
      <div>
        <div className="bg-white w-[50px] h-[600px]"/>
      </div>
      <RevealOnScroll className="small-text-bg justify-center items-center">
        <p>{message}</p>
      </RevealOnScroll>
    </div>
  )
}

export default TimelineComp
