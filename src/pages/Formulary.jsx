// Node modules
import { useState } from "react";

// Project files
import resizeImage from "../scripts/resizeImage";
import readFile from "../scripts/readFile";

export default function Formulary() {
  // Local state
  const [form, setForm] = useState({ title: "", image: "" });

  // Properties
  const END_POINT = "http://localhost:8000";
  const METHOD = "POST";
  const HEADERS = {}; // add any security if needed

  // Methods
  function onSubmit(event) {
    console.log("Trying to send image using:", form);

    event.preventDefault();
    fetch(END_POINT, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(form),
    })
      .then((response) => onSuccess(response))
      .catch((error) => onFailure(error));
  }

  function onSuccess(response) {
    console.log(response);
    alert("Image uploaded ✅. Go to gallery to see it!");
  }

  function onFailure(error) {
    console.error(error);
    alert("Could not upload content ❌");
  }

  async function onImageChoosen(event) {
    const imageAsFile = event.currentTarget.files[0];
    console.log("Image as a file: (File)");
    console.log(imageAsFile);

    const imageAsImage = await readFile(imageAsFile);
    console.log("Image as a file: (Image)");
    console.log(imageAsImage);

    const imageAsBlob = await resizeImage(imageAsFile, 500, 500);
    console.log("Image as a file: (Blob)");
    console.log(imageAsBlob);

    const imageToBase64 = await readFile(imageAsBlob);
    console.log("Image as a string: (Base 64)");
    console.log(imageToBase64);

    // pass here any of the image variables created above
    setForm({ ...form, image: imageToBase64 });
  }

  return (
    <div>
      <h1>Upload image page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title ex: Car, Mountain"
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
        />
        <br />
        <label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(event) => onImageChoosen(event)}
          />
          <img src={form.image} />
        </label>
        <br />
        <button>Upload</button>
      </form>
    </div>
  );
}
