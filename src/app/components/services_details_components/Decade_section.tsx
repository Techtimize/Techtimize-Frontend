import { Benefits_of_Our_UI_UX_Services } from "@/app/constants/ui_ux_details";

export default function Decade_section() {
  return (
    <div className="flex flex-wrap">
      {Benefits_of_Our_UI_UX_Services.map((item) => {
        return (
          <div
            key={item.imageurl}
            className="relative overflow-hidden bg-cover bg-center h-[450px] w-[100%] sm:w-1/3 group"
            style={{ backgroundImage: `url(${item.imageurl})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-[10px] sm:p-5 text-center transition-all duration-700 ease-in-out group-hover:bg-[#0697D5]/90">
              <h3 className="text-[27px]">{item.heading}</h3>
              <div className="bg-[#0697D5] h-[3px] w-[60px] my-2 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:max-h-0"></div>
              <p className="max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
