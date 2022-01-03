import "../shopcurrents.css";

function Shoporder({ title, id, handledelete, adddata }) {
  const deletedata = () => {
    handledelete(id);
    adddata(title);
  };

  return (
    <div className="left">
      <div>{title}</div>

      <button className="button" onClick={deletedata}>
        See Details
      </button>
    </div>
  );
}
export default Shoporder;
