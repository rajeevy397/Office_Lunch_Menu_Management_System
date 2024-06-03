import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminMenuEdit.css'

const AdminMenuEdit = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentMenu, setCurrentMenu] = useState({ date: '', options: '' });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/menu/view');
        setMenu(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleEdit = (menuItem) => {
    setEditMode(true);
    setCurrentMenu(menuItem);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/menu/delete/${id}`);
      setMenu(menu.filter((item) => item.id !== id));
    } catch (error) {
      alert('Error deleting menu. Please try again.');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/menu/edit/${currentMenu.id}`, {
        date: currentMenu.date,
        options: currentMenu.options.split(',').map((option) => option.trim()),
      });
      setMenu(
        menu.map((item) => (item.id === currentMenu.id ? currentMenu : item))
      );
      setEditMode(false);
      setCurrentMenu({ date: '', options: '' });
    } catch (error) {
      alert('Error updating menu. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Menu Management</h1>
      {loading && <p>Loading menu...</p>}
      {error && <p>Error fetching menu: {error.message}</p>}
      {editMode ? (
        <div className="card my-4">
          <div className="card-body">
            <h5 className="card-title">Edit Menu</h5>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={currentMenu.date}
                  onChange={(e) =>
                    setCurrentMenu({ ...currentMenu, date: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Options (comma-separated)</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentMenu.options}
                  onChange={(e) =>
                    setCurrentMenu({ ...currentMenu, options: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Options</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                  {Array.isArray(item.options)
                    ? item.options.join(', ')
                    : item.options}
                </td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminMenuEdit;
