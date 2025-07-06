function List() {
  let front = ["HTML", "CSS", "REACT", "NEXTJS", "BOOTSTRAP"];
  let back = ["NODE", "EXPRESS", "MONGO"];
  let DEV = ["Dockers"];

  return (
    <ol>
      <li>
        Front-End
        <ul>
          {front.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </li>

      <li>
        Backend
        <ul>
          {back.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </li>

      <li>
        Dev Ops
        <ul>
          {DEV.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </li>
    </ol>
  );
}

export default List;
