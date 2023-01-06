import React from "react";


const SorteioRow = (props) => {
const {  name, email,tirou } = props.obj;

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{tirou}	</td>
	</tr>
);
};

export default SorteioRow;
