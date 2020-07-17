const TOKEN_MESSAGE_ERROR = 'REACT_APP_GITHUB_ACCESS_TOKEN not provide on .env'


export async function getGithubToken(): Promise<string> {
  const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN
  
  if (!token) {
    console.error(TOKEN_MESSAGE_ERROR)
    throw new Error(TOKEN_MESSAGE_ERROR)
  }

  return token
}