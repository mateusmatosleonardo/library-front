import { useEffect, useState } from "react"
import AxiosAdapter from "@/infra/http/axios-adapter"
import UsersGatewayHttp from "@/infra/gateway/users/UsersGatewayHttp"

export const useFetchUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  async function getUsers() {
    setLoading(true)
    try {
      const httpClient = new AxiosAdapter()
      const usersGateway = new UsersGatewayHttp(httpClient)
      const users = await usersGateway.getAllUsers()
      setUsers(users)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function getUserByEmail(email: string) {
    setLoading(true)
    try {
      const httpClient = new AxiosAdapter()
      const usersGateway = new UsersGatewayHttp(httpClient)
      const user = await usersGateway.getUserByEmail(email)
      setUsers(user)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return {
    users,
    loading,
    getUsers,
    getUserByEmail
  }
}
