const GITHUB_REPO = 'https://api.github.com/repos/GWjun/gwjun-ui/contents';

type contentType = 'version-config.json';

interface getFilesArgs {
  type: contentType;
}

export default async function getFiles({ type }: getFilesArgs) {
  const fetchUrl = `${GITHUB_REPO}/${type}`;

  const response = await fetch(fetchUrl);
  if (response.status === 404) throw new Error(`${type} not found.`);
  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  if (data.length === 0) {
    throw new Error(`${type} is empty or not found.`);
  }

  if (data.content && data.encoding === 'base64') {
    const decodedContent = atob(data.content);

    const jsonObject = JSON.parse(decodedContent);
    return jsonObject;
  } else {
    console.log('No content or unsupported encoding:', data);
  }

  return null;
}
