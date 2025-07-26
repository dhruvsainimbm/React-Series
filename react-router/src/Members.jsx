import { Link } from "react-router-dom";

function Members() {
  const userData = [
    { id: 1, name: "dhruv" },
    { id: 2, name: "hima" },
    { id: 3, name: "bhavesh" },
    { id: 4, name: "yash" },
    { id: 5, name: "vedansh" },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>this is the member page</h1>
      <div>
        {userData.map((item) => {
          return (
            <h4 key={item.id}>
              <Link to={"/members/" + item.id}> {item.name}</Link>
            </h4>
          );
        })}
      </div>
    </div>
  );
}

export default Members;
