
const User=({users})=>{
    return(
        <div>
            <span>
                {users.name}
                {users.height}
                {users.mass}
                {users.hair_color}
                {users.eye_color}
                {users.birth_year}
                {users.gender}
            </span>
        </div>
    )
}