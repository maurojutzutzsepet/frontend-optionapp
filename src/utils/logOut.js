export default function logoutUser() {
  localStorage.removeItem("infoUser");
  window.location.href = "/";
}
