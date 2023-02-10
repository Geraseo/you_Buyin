export function status() {
  document.getElementById("status").innerHTML = `
  <h2 class="text-center">Not logged in</h2>
    <input
      id="inputEmail"
      class="w-75 my-1"
      type="email"
      placeholder="email address"
    />
    <input
      id="inputPass"
      class="w-75 my-1"
      type="password"
      placeholder="password "
    />
    <button id="loginBtn" class="btn btn-success my-1">Login</button>
    <h3 class="text-white">or</h3>
    <button id="registerBtn" class="btn btn-primary my-1">
      Register
    </button>
    <button id="logoutBtn" class="btn btn-primary my-1">
      Logout
    </button>`;
}
