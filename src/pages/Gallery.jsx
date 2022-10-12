import { useEffect, useState } from "react";

export default function Gallery() {
  // Local state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  // Properties
  const END_POINT = "http://localhost:8000/content";

  // Methods
  useEffect(() => {
    fetch(END_POINT)
      .then((response) => onSuccess(response))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(response) {
    console.log(response);
    setData(response.data);
    setStatus("ready");
  }

  function onFailure(error) {
    console.error(error);
    setStatus("error");
  }

  // Components
  const Cards = data.map((item) => (
    <article className="card" key={item.id}>
      <img src={item.imageURL} />
      <h2>{`#${item.id}.- ${item.title}`}</h2>
    </article>
  ));

  // Safeguards
  if (status === "loading") return <p>⏳ Loading...</p>;
  if (status === "error") return <p>❌ Error...</p>;
  if (data.length === 0) return <p>🏞 No images yet... </p>;

  return (
    <div>
      <h1>Gallery page</h1>
      {Cards}
    </div>
  );
}
