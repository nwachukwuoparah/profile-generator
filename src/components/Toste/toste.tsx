import "./toste.css"

const Toste = ({ suscess, error, toste, top }: { suscess?: string, error?: string, toste: boolean, top: string }) => {

  return (
    <div
      style={{
        top: toste ? top : "-50px",
        border: suscess
          ? "1px solid rgba(0, 128, 0,50%)"
          : "1px solid rgba(255, 0, 0,40%)",
        backgroundColor: suscess ? "rgba(0, 128, 0,10%)" : "rgba(255, 0, 0,10%)",
        color: suscess ? "rgba(0, 128, 0)" : "rgba(255, 0, 0)",
      }}
      className="toste-wrap"
    >{suscess ? suscess : error}</div>
  );
};

export default Toste;
