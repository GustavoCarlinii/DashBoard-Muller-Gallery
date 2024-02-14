import React from "react"

import usersService from '../services/user'
import UserList from './UserList'

class Users extends React.Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const usersResponse = await usersService.get()
        const { data } = usersResponse
        try {
            if (data) {
                this.setState({ users: data })
            }

        } catch (error) {
            console.log(error)
        }



    }

    render() {
        return (
            <div style={{ 'padding': '10px' }}>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">Lista de Usuarios Existentes</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-user" id="dataTable" width="100%" cellSpacing="0" style={{'overflowX': 'auto'}}>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Ver usuario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user, index) => {
                                            return <UserList  {...user} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Users;