function FirstRow() {
  return (
    <div>
      <div class="container text-left">
        <div class="row">
          <div class="col-4">
            <input type="test" placeholder="please enter the task name"></input>
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success dhruv">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
