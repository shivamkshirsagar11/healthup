import React,{useState} from 'react'
import Edit from './Edit';
export default function PatientCore(props) {
    var y = props.allPatient;
    const [hide,setHide] = useState(true)
    const [obj,setObj] = useState({})
    const [err, setErr] = useState("")
    function onClickDelete(deleteId){
      var packID = {oldId:deleteId}
      console.log("in delete")
      fetch(`http://localhost:8080/api/patient/update/delete`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(packID)
      }).then(async (res)=>{
        return await res.json();
      }).then(
        (data)=>{
          if (data === "done"){
            window.location.reload();
          }
          else{
            setErr("Some error occurred!")
          }
        }
      )
    }
    if(hide){
  return (
    <div className="container">
    <table className="table table-hover">
      <tbody>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Patient Id</th>
        <th scope="col">Appointment Id</th>
        <th scope="col">Problem</th>
        <th scope="col">Special Condition</th>
        <th scope="col">Previous Problem</th>
        <th scope="col">Appointment Time</th>
        <th scope="col">Appointment Status</th>
        <th scope="col">Doctor Reference</th>
        <th scope="col">Previous Response</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    {y.map((ele,index)=>(
        <tr key={(ele._id).toString().slice(15,24)}>
        <th scope="row">{index+1}</th>
      <td >{ele.full_name}</td>
      <td >{ele.patient_id}</td>
      <td >{ele._id}</td>
      <td >{ele.problem}</td>
      <td >{ele.special_condition}</td>
      <td >{ele.previous_problem}</td>
      <td >{ele.datetime}</td>
      <td >{ele.status}</td>
      <td >{ele.doc_ref}</td>
      <td >{ele.msg}</td>
          <td ><svg onClick={()=>{setHide(false); setObj(ele)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>
          <td ><svg onClick={()=>{onClickDelete(ele._id);}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></td>
<td></td>
        </tr>
    ))}
    </tbody>
      </table>
      <span style={{"color":"red"}}>{err}</span>
    </div>
  )
    }
    else{
      return(<Edit obj = {obj}/>);
    }
}
