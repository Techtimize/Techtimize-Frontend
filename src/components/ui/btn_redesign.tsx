import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";

type Btn = {
    content: string,
    url: string
}

export default function Btn_redesign(props: Btn) {
    return (
        <Link className="px-[10px] text-[#fff] btn-grad sm:px-[30px] py-[12px] rounded-[8px] font-medium inline-flex items-center" href={props.url}>
             {props.content} <MdArrowOutward className="ml-[10px]"/>
        </Link>
    )
}