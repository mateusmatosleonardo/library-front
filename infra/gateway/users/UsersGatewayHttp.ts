import { UsersGateway } from "./UsersGateway"
import { HttpClient } from "../../http/http-client"

export default class UsersGatewayHttp implements UsersGateway {
  constructor(private readonly httpClient: HttpClient) {}

  async getAllUsers() {
    return this.httpClient.get("/users")
  }
}
