import React, {Component} from "react"
import axios from "axios"
import "./createUser.style.scss"

class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }

    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const user = {
            username: this.state.username
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then((res) => console.log(res.data)) // data from axios lib

            this.setState({
                username: ""
            })
    }
    
    
    
    render() {
        return(
            <div className="createuser">
                 <h3>Create New User</h3>
                 <form onSubmit={this.onSubmit}>
                     <div className="createuser__group">
                         <label>Username:</label>
                         <input 
                         className="create__group-control"
                         type="text"
                         value={this.state.username}
                         onChange={this.onChangeUsername}
                         required
                         />
                     </div>
                     <div className="createuser__group">
                         <input type="submit" value="Create User"  className="btn-primary"/>
                     </div>

                 </form>
            </div>
        )
    }
}

export default CreateUser