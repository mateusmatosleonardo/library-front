export interface UsersGateway {
  getAllUsers(): Promise<any>
  saveUser(body: any): Promise<any>
  deleteUser(id: string): Promise<any>
}
