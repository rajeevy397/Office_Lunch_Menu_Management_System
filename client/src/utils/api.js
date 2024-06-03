const baseUrl = 'http://localhost:5000/api'; // Update with your actual backend base URL

async function addMenu(menuData) {
  const response = await fetch(`${baseUrl}/menus`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(menuData),
  });
  return response;
}

async function getMenuById(menuId) {
  const response = await fetch(`${baseUrl}/menus/${menuId}`);
  return response;
}

export { addMenu, getMenuById };
