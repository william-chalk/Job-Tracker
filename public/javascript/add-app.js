

async function newFormHandler(event) {
  event.preventDefault();

  const job_title = document.querySelector('input[name="job_title"]').value;
  const company_name = document.querySelector(
    'input[name="company_name"]'
  ).value;
  const app_url = document.querySelector('input[name="app_url"]').value;
  const appLanguage = document.querySelector(".language-check:checked").value;



  // const appStatus = document.querySelector('select[id="app_status"]').value;

  const response = await fetch(`api/applications`, {
    method: "POST",
    body: JSON.stringify({
      job_title,
      company_name,
      app_url,
      appLanguage,
      // appStatus,
    }),
    headers: {
      'Content-Type': 'application/json'
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
  .querySelector("#new-app-form")
  .addEventListener("submit", newFormHandler);
