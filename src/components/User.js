
const User=({user})=>{
    return(
        <div className="flex flex-col mt-8">
            <div className="text-lg font-semibold border-dotted border-2 border-indigo-600">
            {user.name}
            </div>
            <div className="flex flex-col  my-6 ">
                <ul className="" >
                    <li className="my-3 border-double border-4 border-indigo-600"><p className="font-medium">This character's height is: </p> {user.height}</li>
                    <li className="my-3 border-double border-4 border-indigo-600"><p className="font-medium">This character's mass is: </p>{user.mass}</li>
                    <li className="my-3 border-double border-4 border-indigo-600"><p className="font-medium">Hair color: </p>{user.hair_color}</li>
                </ul>
                <ul className="">
                    <li className="my-3 border-double border-4 border-indigo-600"><p className="font-medium">Eye color: </p>{user.eye_color}</li>
                    <li className="my-3 border-double border-4 border-indigo-600"><p className="font-medium">Birth year: </p>{user.birth_year}</li>
                    <li className="my-3 border-double border-4 border-indigo-600"><p className="font-medium">Gender: </p>{user.gender}</li>
                </ul>
            </div>
        </div>
    )
}

export default User;