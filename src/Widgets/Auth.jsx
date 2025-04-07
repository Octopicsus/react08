import AccountInfo from "./AccountInfo";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

export default function Auth() {
  const user = useSelector((state) => state.currentUser);

  return <>{user.isAuth ? <AccountInfo /> : <LoginForm />}</>;
}
