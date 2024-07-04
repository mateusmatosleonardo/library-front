'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil1Icon, TrashIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function Users() {
  const users = [
    { name: "Ana Souza", email: "ana.souza@example.com", cpf: "123.456.789-00" },
    { name: "Bruno Lima", email: "bruno.lima@example.com", cpf: "987.654.321-11" },
    { name: "Carlos Almeida", email: "carlos.almeida@example.com", cpf: "456.789.123-22" },
    { name: "Daniela Pereira", email: "daniela.pereira@example.com", cpf: "789.123.456-33" },
    { name: "Eduardo Silva", email: "eduardo.silva@example.com", cpf: "321.654.987-44" },
    { name: "Fernanda Rocha", email: "fernanda.rocha@example.com", cpf: "654.321.789-55" },
    { name: "Gustavo Santos", email: "gustavo.santos@example.com", cpf: "147.258.369-66" },
    { name: "Helena Costa", email: "helena.costa@example.com", cpf: "258.369.147-77" },
  ];

  function handleClick(debug: string) {
    alert(debug)
  }

  return (
    <main className="w-full min-h-screen bg-dark-primary">
      <div className="mx-12 mt-12">
        <h1 className="text-2xl font-bold text-gray-300">
          Usuários
        </h1>
      </div>
      <div className="flex flex-col gap-y-6 px-12 pt-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute top-1.5 left-1 w-5 h-5 text-gray-300" />
          <input
            className="w-full bg-transparent text-gray-300 border-gray-300 border-[0.5px] py-[3px] pl-7 rounded-sm"
            type="text"
          />
        </div>
        <div className="border border-gray-700 rounded-md">
          <Table className="bg-[#313131] rounded-md bg-clip-padding backdrop-filter bg-opacity-10 backdrop-blur-sm">
            <TableHeader className="border-gray-600">
              <TableRow className="border-gray-600">
                <TableHead className="text-gray-500 py-4">Nome</TableHead>
                <TableHead className="text-gray-500 py-4">E-mail</TableHead>
                <TableHead className="text-gray-500 py-4">CPF</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-300">
              {users.map((user, index) => (
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
        </div>
      </div>
    </main>
  );
}