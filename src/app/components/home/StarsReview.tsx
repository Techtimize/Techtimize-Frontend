import { GoStarFill } from "react-icons/go";

export default function StarsReview({ stars }: { stars: number }) {
    const filledStars = [];
    const emptyStars = [];


    for (let i = 0; i < stars; i++) {
        filledStars.push(<GoStarFill key={`filled-${i}`} className="text-[#0697D5]" />);
    }


    for (let i = 0; i < 5 - stars; i++) {
        emptyStars.push(<GoStarFill key={`empty-${i}`} className="text-[#C7C7C7]" />);
    }

    return <div className="flex">{[...filledStars, ...emptyStars]}</div>;
}
