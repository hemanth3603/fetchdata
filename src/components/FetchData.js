import Axios from 'axios';
import { useEffect, useState } from 'react';

export default function FetchData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("https://dummyjson.com/users/")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.users)
                    setData(res.data.users)

                }
                else {
                    throw new Error("Fetch failed")
                }
            })
            .catch((err) => { alert(err.message) })
    }, [])
    return (
        <div className='container'>
            <div className='mt-3'>
                <h2>Fetch data from API </h2>

                <table className='table table-dark table-hover table-borderless table-sm'>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>E-mail</th>
                            <th>Username</th>
                            <th>Domain</th>
                            <th>IP</th>
                            <th>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, ind) => {
                            return (<tr key={ind}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            </div>
        </div>

    )
}
// import Axios from 'axios';
// import { useEffect, useState } from 'react';
// import List from 'react-virtualized/dist/commonjs/List';

// export default function FetchData() {
//     const [data, setData] = useState({});
//     useEffect(() => {
//         Axios.get("https://dummyjson.com/users")
//             .then((res) => {
//                 if (res.status === 200 && typeof res.data === 'object') {
//                     console.log(typeof res.data);
//                     setData(res.data);
//                 } else {
//                     throw new Error("Fetch failed");
//                 }
//             })
//             .catch((err) => { alert(err.message); })
//     }, []);

//     return (
//         <div className='container'>
//           <div className='mt-3'>
//             <h2>Fetch data from API</h2>
//             <List
//               itemData={data}
//               renderItem={({ key, value }) => (
//                 <tr key={key}>
//                   <td>{key}</td>
//                   <td>{value}</td>
//                 </tr>
//               )}
//             />
//           </div>
//         </div>
//       );
// }
