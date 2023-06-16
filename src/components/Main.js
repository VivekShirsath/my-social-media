
import {Input} from './Input';
import { Filter } from './Filter';
import { Post } from './Post';

export const Main = () => {
    return(
        <div className="flex flex-col w-2/4 bg-secondary_bg">
        <Input/>
        <Filter/>
        <hr className="text-primary_bg"></hr>
        <Post/>
        </div>
    )
}