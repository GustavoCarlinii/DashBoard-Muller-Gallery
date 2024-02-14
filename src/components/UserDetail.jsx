import React from "react";
import { useParams } from "react-router-dom";


import usersService from '../services/user'


const UserDetail = () => {
    const {id} = useParams();

    const [user,setUser] = React.useState({});

    React.useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await usersService.getById(id);
        const users = data.data
        setUser(users);
    };

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Usuario: {user.first_name}</h5>
                </div>
                <div className="card-body">
                    <p>Nombre: {user.first_name}</p>
                    <p>Apellido: {user.last_name}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>
    )
    
}

export default UserDetail