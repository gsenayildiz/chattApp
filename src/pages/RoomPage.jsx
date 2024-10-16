const RoomPage = ({ setIsAuth, setRoom }) => {
  //çıkış
  const logout = () => {
    //yetki state ni false cek
    setIsAuth(false);

    //localdeki tokeni kaldır
    localStorage.removeItem("token");
  };

  //form gönderildiğinde state güncellendi
  const handleSubmit = (e) => {
    e.preventDefault();

    //ınputa girilen değeri al ve küçük harfe çevir (harf duyuarlılığı ortadan kalktı)
    const room = e.target[0].value.toLocaleLowerCase();

    //state i güncelle
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Hangi Odaya Gireceksiniz ?</p>

      <input placeholder="ör:haftaiçi" type="text" required />

      <button type="submit">Odaya Gir</button>
      <button onClick={logout} type="button">
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
