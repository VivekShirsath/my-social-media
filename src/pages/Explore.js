import { Aside } from "../components/Aside"
import { Section } from "../components/Section"
import { Post } from "../components/Post"

export const Explore = () => {
    return(
        <>
        <Aside/>
        <div className="flex flex-col md:w-2/4 bg-secondary_bg w-full">
        <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">Explore</h4>
        <Post type={"explore"}/>
        </div>
        <Section/>
        </>
    )
}