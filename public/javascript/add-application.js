
async function newFormHandler(event) {
    event.preventDefault();
  
   
  
    const response = await fetch(`/api/applications`, {
      method: 'POST',
      body: JSON.stringify({
        job_title,
        company_name,
        app_url,
        app_status,
        app_language
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  