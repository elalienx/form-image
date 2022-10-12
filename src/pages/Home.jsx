// Node modules
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        This project is a quick test to know how to upload and store images as
        separate files in the server with a url reference inside the database.
        authentification system on Spring Boot.
      </p>
      <p>
        To make the proccess faster, I will resize the images on the frontend so
        you don't need to write any backend code to handle that process.
      </p>
      <p>
        Click here to get started: <Link to="/formulary">Upload image</Link>
      </p>
      <h2>Mandatory requirements</h2>
      <ul>
        <li>
          Create a mySQL table <code>content</code> in the server with these
          fields:
        </li>
        <ol>
          <li>id</li>
          <li>title</li>
          <li>image</li>
        </ol>
        <li>
          Use Spring Boot to create the API endpoints. Check with Marcus to use
          the same version.
        </li>
        <li>
          The image should be name as the id in the table. This is to automate
          the image naming process and avoid student overwritting images by
          mistake.
        </li>
        <ul>
          <li>Example good ✅: 1.png, 2.png</li>
          <li>Example bad ❌: car.png, mountain.png</li>
        </ul>
        <li>
          Check if we should send the images in the frontend as blob (raw file)
          or as base64 (string) and then converting them as files on the server.
        </li>
      </ul>
    </div>
  );
}
