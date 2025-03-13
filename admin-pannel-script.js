document.querySelectorAll(".control-pannel li").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".control-pannel li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");
    });
});

function showContent(setting) {
    const settingsContent = document.querySelector(".settings-content");

    // Define content for each setting
    const content = {
        addUser: `
            <h2>Add User</h2>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="Enter username"><br>

                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Enter email"><br>

                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter password"><br>

                <button type="submit">Submit</button>
            </form>
        `,
        getUserById: `<h2>Get User By ID</h2>
            <label for="userId">User ID:</label>
            <input type="text" id="userId" placeholder="Enter user ID">
            <button>Search</button>
        `,
        getAllUsers: `<h2>All Users</h2><p>Display list of users here.</p>`,
        updateUser: `<h2>Update User</h2><p>Update user form here.</p>`,
        deleteUser: `<h2>Delete User</h2><p>Enter user ID to delete.</p>`,
        addRole: `<h2>Add Role</h2><p>Add role form here.</p>`,
        addRoleToUser: `<h2>Assign Role</h2><p>Assign role form here.</p>`,
        getRoleById: `<h2>Get Role</h2><p>Search for role by ID.</p>`,
        deleteRole: `<h2>Delete Role</h2><p>Enter role ID to delete.</p>`,
    };

    // Update the right-side content
    settingsContent.innerHTML = content[setting] || "<h2>Option not found</h2>";
}