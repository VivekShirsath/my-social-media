
export const Input = () => {
    return(
        <>
        <h4 className="text-2xl text-color p-4 text-center">Home</h4>
        <div className="flex relative p-2 items-center">
        <input type="text" className = "p-4 rounded-md text-secondary_bg w-full"
        placeholder="What's happening?" 
        />
        <button className= "bg-cta_color text-secondary_bg rounded-md p-1 absolute right-3 ">
            Post</button>
         </div>
        </>
    )
}