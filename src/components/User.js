
const User=({user})=>{
    return(
        <div className="flex flex-col">
            <div className="text-lg ">
            {user.name}
            </div>
            <div className="flex space-x-4">
                <ul>
                    <li>{user.height}</li>
                    <li>{user.mass}</li>
                    <li>{user.hair_color}</li>
                </ul>
                <ul>
                    <li>{user.eye_color}</li>
                    <li>{user.birth_year}</li>
                    <li>{user.gender}</li>
                </ul>
            </div>
        </div>
    )
}

export default User;