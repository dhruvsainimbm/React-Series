function Time() {
  let time = new Date();
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "700",
      }}
    >
      The Actual Date is : {time.toLocaleDateString()} <br></br>
      The Actual Time is : {time.toLocaleTimeString()}
    </div>
  );
}

export default Time;
