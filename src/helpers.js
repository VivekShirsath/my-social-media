

function dateComparison(a, b) {
    const date1 = new Date(a.createdAt)
    const date2 = new Date(b.createdAt)
    return date2 - date1;
}

function dateComparison1(a, b) {
    const date1 = new Date(a.createdAt)
    const date2 = new Date(b.createdAt)
    return date1 - date2;
}


export const filterLogic = (loggedUser,posts,filters) => {
    const usernames = loggedUser?.following?.map(({username}) => username);
        const followingUser = usernames && [loggedUser?.username,...usernames]
        const followingPosts = posts?.filter(({username}) => followingUser?.some(val => val === username));
        const list = followingPosts && [...followingPosts];
        const filterPosts = filters ?  filters === "Trending" ? list.sort((a,b) => b.likes.likeCount - a.likes.likeCount) : list.sort(dateComparison) : followingPosts;
        const filterBydates = filters==="Oldest" ? list.sort(dateComparison1) : filterPosts
        
        return filterBydates;
}