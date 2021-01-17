import React from "react";

const url =
  "https://bxjc2f8yt0.execute-api.us-east-2.amazonaws.com/calculate_canny_edges";
function App() {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const reader = new FileReader();
      const file = files[0];

      reader.onload = (e) => {
        const result = e.target?.result as string;

        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            url: result,
            minThreshold: 20,
            maxThreshold: 100,
            useL2Gradient: true,
            useRigidLines: true,
          }),
        }).then((result) => {
          console.log(result);
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1>Upload file</h1>
      <input
        type="file"
        onChange={handleUpload}
        name="image"
        accept="image/*"
      />
    </div>
  );
}

export default App;
