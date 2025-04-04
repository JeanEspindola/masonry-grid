export const config = {
  API_KEY: process.env.API_KEY,
}

export function getEnv() {
  return {
    ...config,
  }
}
