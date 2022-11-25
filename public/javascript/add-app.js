async function newFormHandler(event) {
  event.preventDefault();

  const job_title = document.querySelector('input[name="job_title"]').value;
  const company_name = document.querySelector(
    'input[name="company_name"]'
  ).value;
  const app_url = document.querySelector('input[name="app_url"]').value;
  const selectedLangs = document.querySelectorAll(".language-check:checked");
  var app_language = "";
  for (let i = 0; i < selectedLangs.length; i++) {
    app_language += selectedLangs[i].value;
    if (i != selectedLangs.length - 1) {
      app_language += ", ";
    }
  }
  // const appStatus = document.querySelector('select[id="app_status"]').value;

  const response = await fetch(`api/applications`, {
    method: "POST",
    body: JSON.stringify({
      job_title,
      company_name,
      app_url,
      app_language,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    console.log(response.body);
  } else {
    const parsedResponse = await response.json();
    showToast({ message: parsedResponse.message });
  }
}

document
  .querySelector("#new-app-form")
  .addEventListener("submit", newFormHandler);
