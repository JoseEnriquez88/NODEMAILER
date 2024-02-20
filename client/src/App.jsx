import { Fragment } from "react";
import axios from "axios";

const App = () => {
  const sendEmail = async () => {
    await axios.post("http://localhost:3001/nodemailer", {
      gmail: "casasigilosa30@gmail.com",
      name: "Jose",
    });
  };

  return (
    <Fragment>
      <button onClick={() => sendEmail()}>Envio de email</button>
    </Fragment>
  );
};

export default App;
