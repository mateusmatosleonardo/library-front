'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'

type UsersTableProps = {
  data?: any[]
}

export default function UsersTable({ data }: UsersTableProps) {
  return (
    <Table className="bg-white rounded-md">
      <TableHeader className="border-gray-200">
        <TableRow className="border-gray-200">
          <TableHead className="text-slate-950 py-4">Nome</TableHead>
          <TableHead className="text-slate-950 py-4">E-mail</TableHead>
          <TableHead className="text-slate-950 py-4">CPF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-slate-900">
        {data?.map((user, index) => (
          <TableRow key={index} className="border-0">
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.cpf}</TableCell>
            <TableCell className="flex justify-center">
              <div className="flex gap-x-2">
                <div
                  className="flex py-1 px-2 gap-x-1 rounded-md hover:cursor-pointer bg-blue-500"
                  onClick={() => alert(user.name)}
                >
                  <Pencil1Icon className="w-5 h-5 text-gray-200" />
                  <p className="text-gray-200">Editar</p>
                </div>
                <div className="flex py-1 px-2 rounded-md hover:cursor-pointer bg-red-500">
                  <TrashIcon className="w-5 h-5 text-gray-200" />
                  <p className="text-gray-200">Excluir</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}