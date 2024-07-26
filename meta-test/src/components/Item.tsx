type ItemProps = {
  item: number;
  handleToggle: (item: number) => void;
};
const Item = ({ item, handleToggle }: ItemProps) => {
  return (
    <label>
      <input type="checkbox" onChange={() => handleToggle(item)} />
      {item}
    </label>
  );
};

export default Item;
