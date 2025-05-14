function App() {
  return (
    <>
      <h1 className="faraz">Hello world</h1>
      <h2 style={{ fontFamily: "sans-serif" }}>Hell SIR</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
            width: "400px",
            height: "200px",
            borderRadius: "20px",
            border: "2px solid black",

          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              width: "300px",
              height: "150px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "orange",
                width: "200px",
                height: "100px",
                borderRadius: "20px",
              }}
            >
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
