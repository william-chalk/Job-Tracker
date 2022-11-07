//  Source = module 14
async function newFormHandler(event) {
  event.preventDefault();

  const jobTitle = document.querySelector('input[name="job_title"]').value;
  const companyName = document.querySelector(
    'input[name="company_name"]'
  ).value;
  const appUrl = document.querySelector('input[name="app_url"]').value;
  const appLanguage = document.querySelector('input[name="languages[]"]');
  const appStatus = document.querySelector('select[id="app_status"]').value;

  const response = await fetch(`/api/applications`, {
    method: "POST",
    body: JSON.stringify({
      jobTitle,
      companyName,
      appUrl,
      appLanguage,
      appStatus,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    console.log(response.body);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-app-form")
  .addEventListener("submit", newFormHandler);
