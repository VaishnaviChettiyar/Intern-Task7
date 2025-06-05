function fetchUserData() {
    const userList = document.getElementById("user-list");
    const errorMsg = document.getElementById("error-msg");
    userList.innerHTML = "";
    errorMsg.textContent = "";
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        return response.json();
      })
      .then(data => {
        data.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.classList.add("user");
  
          userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          `;
  
          userList.appendChild(userDiv);
        });
      })
      .catch(error => {
        errorMsg.textContent = "Failed to load data. Please check your internet connection.";
        console.error("Fetch error:", error);
      });
  }
  fetchUserData();
  