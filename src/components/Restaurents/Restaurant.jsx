import Filter from "./Filter";
import ResCard from "./ResCard";

export default Restaurant = ({ restaurants }) => {
  return (
    <div className="res-container">
      <Filter />
    <div className="res-card-container">
      {restaurants.map((restro) => {
        return <ResCard key={restro.info.id} {...restro.info} />;
      })}
    </div>
    </div>
  );
};
