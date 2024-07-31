'use client'

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
import { formatToCPF, formatToPhone } from "brazilian-values"

type UsersTableProps = {
  data?: any[]
}

export default function UsersTable({ data }: UsersTableProps) {
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
        {data?.map((user, index) => (
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
                    <Button>
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
                      <Button variant="destructive">
                        Excluir
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