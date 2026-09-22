// Netlify function to save catalog to GitHub
// Requires GITHUB_TOKEN in Netlify env vars

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { catalog, message } = JSON.parse(event.body);
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || 'Ai-Whisperers/mburucuya-potypy';
  const branch = process.env.GITHUB_BRANCH || 'main';
  const filePath = 'data/catalog-public.json';

  if (!token) {
    return { statusCode: 500, body: 'GITHUB_TOKEN not configured' };
  }

  const content = Buffer.from(catalog).toString('base64');

  // Get current file SHA for update
  const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`;
  const getResp = await fetch(getUrl, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  let sha = null;
  if (getResp.ok) {
    const data = await getResp.json();
    sha = data.sha;
  }

  // Update file
  const putUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const putResp = await fetch(putUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message || 'Admin: update catalog',
      content,
      branch,
      sha
    })
  });

  if (!putResp.ok) {
    const err = await putResp.text();
    return { statusCode: 400, body: err };
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
