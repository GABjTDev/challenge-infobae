import { useEffect, useState } from "react";
import getAllUsers from "../services/getUsers";

function Users() {

  const [users, setUsers] = useState([]);

   useEffect(() => {
  
    const fetchUsers = async() => {
      const data = await getAllUsers()
      // console.log(data);
      setUsers(data.users)
    }

    fetchUsers();
  }, [])

  return (
    <div className="container-main">
      <div className="container-users">
        {
          users &&
            users.map((user, index) => {
              return (
                <div key={`${index}_${user}`} className="container-info-user">
                  <p>{user.name}</p>
                  <img src={user.picture || 'https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png'} />
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default Users
