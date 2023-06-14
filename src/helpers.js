

function dateComparison(a, b) {
    const date1 = new Date(a.createdAt)
    const date2 = new Date(b.createdAt)
    return date2 - date1;
}

export const filterLogic = (loggedUser,posts,filters) => {
    const usernames = loggedUser?.following?.map(({username}) => username);
        const followingUser = usernames && [loggedUser?.username,...usernames]
        const followingPosts = posts?.filter(({username}) => followingUser?.some(val => val === username));
        const list = followingPosts && [...followingPosts];
        const filterPosts = filters ?  filters === "Trending" ? list.sort((a,b) => b.likes.likeCount - a.likes.likeCount) : list.sort(dateComparison) : followingPosts;

        return filterPosts;
}