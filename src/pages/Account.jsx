function Account() {
  return (
    <div className="page">
      <div className="card">
        <h2>Account Settings</h2>

        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
          />

          <div>
            <h3>Marry Doe</h3>
            <p>marry@gmail.com</p>
          </div>
        </div>

        <p className="desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Account;