
export const Filter = () => {
    return(
        <div className="flex justify-around p-2 text-lg">
        <button className="rounded-md text-secondary_bg bg-primary_bg p-1 active:bg-cta_color">
            Trending
            </button>
        <button className="rounded-md text-secondary_bg bg-primary_bg p-1  active:bg-cta_color">
            Latest
            </button>
        </div>
    )
}