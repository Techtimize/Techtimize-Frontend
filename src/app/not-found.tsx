import Image from "next/image";
import './not-found.css'

export default function NotFound() {
  return (
    <>
        <Image className="top" src={"/assets/images/404-top.png"} alt={"page not available"}  width={500} height={500}/>
    <div className="flex h-screen items-center justify-center flex-col mt-[100px] pb-[100px] relative not-found-parent">
        
        <Image className="w-[50%]" src={"/assets/images/404-page.svg"} alt={"page not available"}  width={50} height={50}/>
        <Image className="bottom" src={"/assets/images/404-bottom.png"} alt={"page not available"}  width={500} height={500}/>
        <h4 className="text-[#0B4D8E] mt-[40px] text-[50px] font-[700]">Whoops!</h4>
        <p className="text-[#727272] text-[50px] font-[700]">Page Not Found</p>
    </div>
    </>
  );
}
