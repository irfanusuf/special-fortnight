// import React from "react";
import loading from "../../assets/loading2.gif";

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img
        src={loading}
        style={{
          width: "300px",
        }}
      />
    </div>
  );
};

export default Loading;
