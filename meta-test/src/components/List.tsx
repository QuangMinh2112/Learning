import Item from "./Item";

interface ListProps {
  data: number[];
  handleToggle: (item: number) => void;
}

const List: React.FC<ListProps> = ({ data, handleToggle }) => {
  return (
    <div className="list_container">
      {data?.map((item, index) => {
        return <Item key={index} item={item} handleToggle={handleToggle} />;
      })}
    </div>
  );
};

export default List;
