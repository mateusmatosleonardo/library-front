'use client'

import { useState } from "react"
import { AxiosError } from "axios"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { formatToCPF, formatToPhone } from "brazilian-values"
import AxiosAdapter from "@/infra/http/axios-adapter"
import UsersGatewayHttp from "@/infra/gateway/users/UsersGatewayHttp"

type UsersTableProps = {
  data?: any[]
  onCallback: () => Promise<void>
}

export default function UsersTable(props: UsersTableProps) {
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  async function handleDeleteUser(id: string) {
    setLoading(true)
    try {
      const httpClient = new AxiosAdapter()
      const usersGateway = new UsersGatewayHttp(httpClient)
      const response = await usersGateway.deleteUser(id)
      toast({
        title: "Sucesso",
        description: "Usuário excluído com sucesso.",
        style: { backgroundColor: '#4CAF50', color: '#fafafa' }
      })
      await props.onCallback()
      return response
    } catch (error) {
      const err = error as AxiosError
      if (
        err.response?.status &&
        err.response.status === 404
      ) {
        toast({
          title: "O usuário não existe",
          description: "Não existe um usuário com essa identificação.",
          variant: "destructive"
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Table className="bg-white rounded-md">
      <TableHeader className="border-gray-200">
        <TableRow className="border-gray-200">
          <TableHead className="text-slate-950 py-4"></TableHead>
          <TableHead className="text-slate-950 py-4">Nome</TableHead>
          <TableHead className="text-slate-950 py-4">E-mail</TableHead>
          <TableHead className="text-slate-950 py-4">CPF</TableHead>
          <TableHead className="text-slate-950 py-4">Telefone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-slate-900">
        {props.data?.map((user, index) => (
          <TableRow key={index} className="border-0">
            <TableCell>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              {formatToCPF(user.cpf)}
            </TableCell>
            <TableCell>
              {formatToPhone(user.phone)}
            </TableCell>
            <TableCell className="flex justify-center">
              <div className="flex gap-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">
                      Editar
                    </Button>
                  </DialogTrigger>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">
                      Excluir
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Excluir usuário</DialogTitle>
                      <DialogDescription>Tem certeza que deseja excluir este usuário?</DialogDescription>
                      <p>{user.name}</p>
                    </DialogHeader>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="ghost">
                          Cancelar
                        </Button>
                      </DialogClose>
                      <Button
                        variant="destructive"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        {loading ? 'Excluindo' : 'Excluir'}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}