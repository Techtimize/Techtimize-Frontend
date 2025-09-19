import { first_technologies, second_technologies } from "@/app/constants/technologies";
import "./Technologies.css"
import Image from "next/image";

export default function Technologies(){
    return(
        <>
        
  <article className="wrapper">
    <div className="marquee pt-[20px] pb-[35px]">
      <div className="marquee__group">
        {
            first_technologies.map((key)=>{
                    return(
                        <span className="flex justify-center items-center" key={key.name}>
                            <Image className="w-[25px] mr-[10px]" src={key.image} alt="tech" width={50} height={50} />
                            <p>{key.name}</p>
                        </span>
                    )
            })
        }
        
      </div>

      <div aria-hidden="true" className="marquee__group">
         {
            first_technologies.map((key)=>{
                    return(
                        <span className="flex justify-center items-center" key={key.name}>
                            <Image className="w-[25px] mr-[10px]" src={key.image} alt="tech" width={50} height={50}/>
                            <p>{key.name}</p>
                        </span>
                    )
            })
        }
        
      </div>
    </div>

    <div className="marquee marquee--reverse pt-[25px] pb-[30px]">
      <div className="marquee__group">
        {
            second_technologies.map((key)=>{
                    return(
                        <span className="flex justify-center items-center" key={key.name}>
                            <Image className="w-[25px] mr-[10px]" src={key.image} alt="tech" width={50} height={50}/>
                            <p>{key.name}</p>
                        </span>
                    )
            })
        }
      </div>

      <div aria-hidden="true" className="marquee__group">
        {
            second_technologies.map((key)=>{
                    return(
                        <span className="flex justify-center items-center" key={key.name}>
                            <Image className="w-[25px] mr-[10px]" src={key.image} alt="tech" width={50} height={50}/>
                            <p>{key.name}</p>
                        </span>
                    )
            })
        }
      </div>
    </div>
  </article>

  <script src="script.js"></script>

        </>
    )
}