import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadData() {
const [data, setData] = useState([]);

function getData() {
axios.get("https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app")

.then((res) => {
console.log(res.data);
setData(res.data);
})
}
useEffect(() => {
getData();
},[]);

function deleteItems(id) {
const deleteFilterData = data.filter((delData) => delData.id !== id);
setData(deleteFilterData);
}


return (
<>

<h3>Read</h3>
<table className="table caption-top">
<caption>List of users</caption>
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Email</th>
<th scope="col">Name</th>
<th scope="col">Edit</th>
<th scope="col">Delete</th>
</tr>
</thead>
<tbody>

{data.map((eachItem) => (
<tr key={eachItem.id}>
<th scope="row">{eachItem.id}</th>
<td>{eachItem.email}</td>
<td>{eachItem.name}</td>
<td><button type="button" className="btn btn-success" >Edit</button></td>
<td><button type="button" className="btn btn-danger" onClick={() => deleteItems(eachItem.id)}>Delete</button></td>
</tr>
))}
</tbody>
</table>

    





</>






);
}
export default ReadData;
