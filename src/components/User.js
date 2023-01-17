const User = ({user}) => {
    return(
        <div className={`cursor-pointer rounded-full flex gap-4 items-center my-3 border-2 border-solid border-green-200 `}>
            <span>{user.name} {user.height} {user.mass} {user.hair_color} {user.skin_color} {user.eye_color} {user.birth_year} {user.gender} </span>
        </div>
    )
}

export default User;