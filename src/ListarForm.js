import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


const TableRow = (props) => {
const { _id, name, email } = props.obj;
const deletarpessoa = () => {
	axios
	.get(
"https://amigosecretoback.fly.dev/delete/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Pessoa deletada");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
    
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>
		<Link className="edit-link"
		to={'/editar/'+_id} state={_id}>
		Edit
		</Link>
		<Button onClick={deletarpessoa}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TableRow;
