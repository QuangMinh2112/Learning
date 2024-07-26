type ActionProps = {
  moveRight: () => void;
  moveLeft: () => void;
};

const Action = ({ moveLeft, moveRight }: ActionProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button className="button" onClick={moveLeft}>
        {" "}
        {"<"}{" "}
      </button>
      <button className="button" onClick={moveRight}>
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
};

export default Action;
