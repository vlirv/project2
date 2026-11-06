/* =========================================================
   auth.js — remembers who is logged in (demo, uses localStorage)
   Loaded on every page. Shared by Person 1 (navbar) and Person 4 (login).
   ========================================================= */

(function () {
  const ROLE_PAGES = { guest: "my-bookings.html", admin: "admin.html", supervisor: "supervisor.html" };
  const ROLE_NAMES = { guest: "Guest", admin: "Admin", supervisor: "Supervisor" };

  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem("currentUser") || "null");
    } catch (err) {
      return null;
    }
  }

  function logOut() {
    try { localStorage.removeItem("currentUser"); } catch (err) { /* ignore */ }
    window.location.href = "login.html";
  }

  // Any element with data-logout (e.g. the dashboards' "Log out" buttons) signs the user out
  document.querySelectorAll("[data-logout]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      logOut();
    });
  });

  const user = getCurrentUser();
  if (!user || !ROLE_PAGES[user.role]) return;

  // Replace the navbar profile icon with a small menu: email, My page, Log out
  const icon = document.querySelector('.site-navbar .nav-icon[title="Login"]');
  if (icon) {
    const menu = document.createElement("div");
    menu.className = "dropdown d-inline-block";
    menu.innerHTML =
      '<a class="nav-icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="My account" aria-label="My account">' +
        '<i class="bi bi-person-check-fill"></i>' +
      '</a>' +
      '<ul class="dropdown-menu dropdown-menu-end">' +
        '<li><span class="dropdown-item-text small text-muted"></span></li>' +
        '<li><hr class="dropdown-divider"></li>' +
        '<li><a class="dropdown-item" href="' + ROLE_PAGES[user.role] + '"><i class="bi bi-house-door"></i> My page</a></li>' +
        '<li><a class="dropdown-item text-danger" href="login.html" data-logout><i class="bi bi-box-arrow-right"></i> Log out</a></li>' +
      '</ul>';
    // textContent so an email can never be read as HTML
    menu.querySelector(".dropdown-item-text").textContent = user.email + " (" + ROLE_NAMES[user.role] + ")";
    menu.querySelector("[data-logout]").addEventListener("click", function (e) {
      e.preventDefault();
      logOut();
    });
    icon.replaceWith(menu);
  }

  // On the login page, tell the user they are already logged in
  const loginForm = document.getElementById("loginEmail");
  if (loginForm) {
    const note = document.createElement("div");
    note.className = "alert alert-info";
    note.innerHTML =
      'You are already logged in as <strong></strong>. ' +
      '<a href="' + ROLE_PAGES[user.role] + '">Go to my page</a> or ' +
      '<a href="login.html" data-logout>log out</a>.';
    note.querySelector("strong").textContent = user.email;
    note.querySelector("[data-logout]").addEventListener("click", function (e) {
      e.preventDefault();
      logOut();
    });
    const form = document.querySelector("form");
    form.parentNode.insertBefore(note, form);
  }
})();
