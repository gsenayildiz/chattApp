import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

function App() {
  //Kullanıcı giriş yaptı mı state i;
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  //kullanıcının girdiği oda state i
  const [room, setRoom] = useState(null);

  //kullanıcının yetkisi yoksa login sayfasını basar
  if (!isAuth) {
    return <LoginPage setIsAuth={setIsAuth} />;
  }

  //kullanıcının yetkisi varsa oda seçme sayfasını basar
  return (
    <div className="container">
      {room ? (
        // oda seçiliyse sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda seçilmediyse oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
}

export default App;
