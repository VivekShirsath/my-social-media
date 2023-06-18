
import { Aside } from "../components/Aside"
import { Section } from "../components/Section"
import { Post } from "../components/Post"

export const BookMarks = () => {
    return(
        <>
        <Aside/>
        <div className="flex flex-col w-2/4 bg-secondary_bg">
        <Post type={"bookmarks"}/>
        </div>
        <Section/>
        </>
    )
}