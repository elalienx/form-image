// Node modules
import { useState } from "react";

// Project files
import resizeImage from "../scripts/resizeImage";
import readFile from "../scripts/readFile";

export default function Formulary() {
  // Local state
  const [form, setForm] = useState({ title: "", image: "" });

  // Properties
  const END_POINT = "http://localhost:8000/upload";
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
    console.log("onImageChoosen()");

    const imageAsFile = event.currentTarget.files[0];
    const imageAsBase64Original = await readFile(imageAsFile);
    const imageAsBlob = await resizeImage(imageAsBase64Original, 500, 500);
    const imageToBase64Resized = await readFile(imageAsBlob);

    console.log("1. Image as a File:");
    console.log(imageAsFile);

    console.log("2. Image as a the original base64 string:");
    console.log(imageAsBase64Original);

    console.log("3. Image as a Blob");
    console.log(imageAsBlob);

    console.log("4. Image as a the resized base64 string:");
    console.log(imageToBase64Resized);

    // pass here any of the image variables created above
    setForm({ ...form, image: imageToBase64Resized });
  }

  return (
    <div>
      <h1>Upload image page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title ex: Car, Mountain"
          required
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
        />
        <br />
        <input
          type="file"
          accept="image/png, image/jpeg"
          required
          onChange={(event) => onImageChoosen(event)}
        />
        <br />
        <img src={form.image} />
        <br />
        <button>Upload</button>
      </form>
    </div>
  );
}
