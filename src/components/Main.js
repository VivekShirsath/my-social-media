
import {Input} from './Input';
import { Filter } from './Filter';
import { Post } from './Post';

export const Main = () => {
    return(
        <div className="flex flex-col md:w-2/4 bg-secondary_bg w-full">
        <Input/>
        <Filter/>
        <hr className="text-primary_bg"></hr>
        <Post type={"home"}/>
        </div>
    )
}