function SecondRow(props) {
  return (
    <div>
      <div
        class="container text-left"
        style={{
          padding: "5px",
        }}
      >
        <div class="row">
          <div class="col-4">{props.taskname}</div>
          <div class="col-4">{props.date}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger dhruv">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondRow;
