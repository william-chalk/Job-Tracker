async function deleteFormHandler(event) {
  event.preventDefault();

  const id = event.target.dataset.id;

  const response = await fetch(`/api/applications/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    const parsedResponse = await response.json();
    showToast({ message: parsedResponse.message });
  }
}

document.querySelectorAll(".delete-app-btn").forEach(button => {
  button.addEventListener("click", deleteFormHandler);
});
