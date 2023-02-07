import React, {useState} from 'react'

const Login = () => {
const [username, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = (e) => {
e.preventDefault();

const data = {
username,
email,
password
}

console.log(data)
if(username || email || password) {
 fetch.post('http://localhost:8800/users',data)
}

}
  return (
    <div>
      <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Enter username'/>
                <br /> <br />
            <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
            <br /> <br />
            <input type= "password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
            <br /> <br />
            <button type="submit" >Submit</button>

        </form>
    </div>
  )
}

export default Login