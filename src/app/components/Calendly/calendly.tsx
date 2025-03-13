'use client'
import { InlineWidget} from "react-calendly";
const CalendlyForm = () => {
    const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
    return (
        <>
            <InlineWidget url={`https://calendly.com/${username}`}
            pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '000000'
              }}
              prefill={{
                date: new Date(Date.now() + 86400000)
              }}
            />
        </>
    )
}

export default CalendlyForm
