function ListGroup(){
    const items = ["New york","Las Vegas","Tokyo","London"];
    return (
        
    <div>
        <h1>Welcome</h1>
        <ul class="list-group">
        {items.map((item) =>(
            <li className="list-group-item active"
             onClick={()=>console.log({item})}
             key={item}
             >{item}</li>))}
    </ul>
  </div>
  );
}
export default ListGroup;