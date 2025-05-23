export async function sendEmail(to, subject, html) {
  const response = await fetch('https://consultancy-server-va0s.onrender.com/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to, subject, html }),
  });

  const data = await response.json();
  return data;
}