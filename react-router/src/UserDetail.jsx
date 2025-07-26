import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function UserDetail() {
  const paramsData = useParams();
  console.log(paramsData);
  return (
    <div>
      <h1>this is the members page</h1>
      {`UserId is :  ${paramsData.id}`}
      <br />
      <br />
      <Link to="/members">Back</Link>
    </div>
  );
}

export default UserDetail;
