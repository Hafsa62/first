import girl from '../assets/girl.jpg'
import img from '../assets/img.jpg'


const Card=(props) =>{
  console.log(props)
    return (
      <>
    
    <div className="m-5 w-[100%]" >
      <div className="p-5 border-2 border-neutral-950 w-[100%] h-[200]">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet harum vel praesentium voluptatum reprehenderit earum commodi voluptates quis nisi eius fuga eaque modi laborum ullam placeat, hic ea impedit.
       </p>
      </div>

      <div className="flex justify-around pt-5  ">
        <div className=" flex items-center ">
          <img className='w-[20%] border-2 rounded-full mr-5' src={props.imgPath} alt="" />
          <h2>WebDeveloper<br /> ReactJs</h2>
        </div>
      </div>
    </div>
    </>  
    )
  }
  
  
  export default Card