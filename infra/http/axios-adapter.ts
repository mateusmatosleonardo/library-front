import { api } from "../api/api"
import { HttpClient } from "./http-client"

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await api.get(url)
    return response.data
  }
}
