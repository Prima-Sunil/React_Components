import { useState } from "react"
import Text from "../Text"
import Button from "../Button"
// import Button from "../Button"
const LoginForm=()=>{
    const [formData,setFormData]=useState({
        username:'',
        password:'',
        email:''
    })
    const updatefiled=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert(`Welcome, ${formData.username}!`);
      };
    return (
        <div>
          <div>
          <Text tag="h1">User Registration</Text>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
               <div>
                <label>UserName:</label>
                <br></br>
                <input type="text" name="username" value={formData.username} onChange={updatefiled} />

               </div>
               <div>
                <label>
                    Email:
                </label>
                <br></br>
                <input type="email" name="email" value={formData.email} onChange={updatefiled}>
                </input>
               </div>
               <div>
                <label>
                    Password:
                </label>
                <br></br>
                <input type="password" name="password" value={formData.password} onChange={updatefiled}>
                </input>
               </div>
               <br></br>
              <div>
              <Button text="Submit the form" ></Button>
              </div>
                
            </form>
          </div>
        </div>

    )
}
export default LoginForm