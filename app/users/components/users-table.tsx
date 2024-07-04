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
    <Table className="bg-[#313131] rounded-md bg-clip-padding backdrop-filter bg-opacity-10 backdrop-blur-sm">
      <TableHeader className="border-gray-600">
        <TableRow className="border-gray-600">
          <TableHead className="text-gray-500 py-4">Nome</TableHead>
          <TableHead className="text-gray-500 py-4">E-mail</TableHead>
          <TableHead className="text-gray-500 py-4">CPF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-gray-300">
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
                  <Pencil1Icon className="w-5 h-5 text-gray-100" />
                  <p>Editar</p>
                </div>
                <div className="flex py-1 px-2 rounded-md hover:cursor-pointer bg-red-500">
                  <TrashIcon className="w-5 h-5 text-gray-100" />
                  <p>Excluir</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}