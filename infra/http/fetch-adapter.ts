import { HttpClient } from "./http-client"

export default class FetchAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url)
    return response.json()
  }
}
