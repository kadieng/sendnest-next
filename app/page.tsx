import SNMainHeader from "@/components/ui/SNMainHeader";
import SNFeatures from "@/components/ui/SNFeatures";
import SNAbout from "@/components/ui/SNAbout";
import SNHowItWorks from "@/components/ui/SNHowItWorks";
import SNTestimonials from "@/components/ui/SNTestimonials";
import SNFooter from "@/components/ui/SNFooter";
import SNNavbar from "@/components/ui/SNNavbar";

export default function Home() {
    return (
        <>
            <SNNavbar/>
            <SNMainHeader/>
            <SNFeatures/>
            <SNAbout/>
            <SNHowItWorks/>
            <SNTestimonials/>
            <SNFooter/>
        </>
    )
}