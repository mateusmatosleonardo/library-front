export interface UsersGateway {
  getAllUsers(): Promise<any>
  saveUser(body: any): Promise<any>
}
