export interface UsersGateway {
  getAllUsers(): Promise<any>
  getUserByEmail(email: string): Promise<any>
  saveUser(body: any): Promise<any>
  deleteUser(id: string): Promise<any>
}
