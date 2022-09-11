import React, {useState, useEffect} from "react";

const userData = [
    {name:"Jivan", email: "jivan@gamil.com"},
    {name:"Amit", email: "amit@gamil.com"},
    {name:"Daniel", email: "daniel@gamil.com"},
    {name:"Ali", email: "ali@gamil.com"},
]

const MultiCheckboxes = () => {
const [users, setUsers] = useState([]);

useEffect(()=> {
  setUsers(userData);
}, [])
const handleChange =(e)=> {
 const {name, checked} = e.target;
 if(name === "selectall"){
    let tempUser = users.map((user)=> {
        return {...user, isChecked:checked}
    });
    setUsers(tempUser);
 }
 else{
    let tempUser = users.map((user)=>
    user.name ===name? {...user, isChecked:checked}: user);
 
 setUsers(tempUser);
 }

}
    return(
        <div>
            <form action="">
                <h3>Select Users</h3>
                <div>
                    <label>
                        <input type="checkbox" className="" name="selectall" onChange={handleChange} checked={users.filter((user)=>user?.isChecked!=true).length<1}/>
                        Select All
                    </label>
                </div>
                {users.map((data, index) => (
                    <div className="flex gap-10">
                        <div className="flex" key={index}>
                        <label>
                            <input type="checkbox" 
                            name={data.name}
                            onChange={handleChange}
                            checked={data.isChecked || false}
                            className="mx-4 cursor-pointer"
                            />
                            {data.name}
                        </label>
                        </div>
                    {data.isChecked===true ? (
                        <div>{data.email}</div>
                    ):""}
                    </div>
                ))}
               
            </form>
        </div>
    )
}
export default MultiCheckboxes;