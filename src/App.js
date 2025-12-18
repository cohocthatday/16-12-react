import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (err) {
        setError("Không thể tải danh sách người dùng!");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Danh sách người dùng</h1>

      {loading && <p className="loading">Đang tải dữ liệu...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="user-list">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <h3>Name: {user.name}</h3>
              <p><b>Username:</b> {user.username}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
              <p><b>Company:</b> {user.company.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Website:</b> {user.website}</p>
              <p><b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
