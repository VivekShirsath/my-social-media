
export const Card = ({content,username,createdAt,_id}) => {
    
    return(
        <div>
            <div>
             <img src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="avatar"/>
                <h3>{username}</h3>
                <h3>{createdAt}</h3>
            </div>
        </div>
    )
}