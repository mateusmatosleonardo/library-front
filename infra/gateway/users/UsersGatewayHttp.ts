import { UsersGateway } from "./UsersGateway"
import { HttpClient } from "@/infra/http/http-client"

export default class UsersGatewayHttp implements UsersGateway {
  constructor(private readonly httpClient: HttpClient) {}

  async getAllUsers() {
    return this.httpClient.get("/users")
  }

  async saveUser(body: any) {
    return this.httpClient.post("/users", body)
  }

  async deleteUser(id: string): Promise<any> {
    return this.httpClient.delete(`/users/${id}`)
  }
}
