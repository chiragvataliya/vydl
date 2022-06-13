import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import axios from "axios";

function postToken(token) {
  axios
    .post("http://localhost:8000/api/users/auth/google", { accessToken: token })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const ButtonLogin = ({ className, buttonText }) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      postToken(codeResponse.access_token);
    },
  });
  return (
    <Button
      onClick={login}
      style={{ background: "#fff", color: "#000" }}
      type="button"
      className={`${className} shadow btn-icon-sm rounded-pill`}
    >
      <i className="g-icon-sm"></i>
      {buttonText}
    </Button>
  );
};

const GoogleLoginButton = (props) => {
  return (
    <GoogleOAuthProvider clientId="310069728719-cu628r2ler21iqfkr0723f3gp4clq8o3.apps.googleusercontent.com">
      <ButtonLogin className={props.className} buttonText={props.buttonText} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
