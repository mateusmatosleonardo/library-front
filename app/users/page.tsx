'use client'

import Loading from './loading'
import UsersTable from './components/users-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogTrigger
} from '@/components/ui/dialog'
import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import { useFetchUsers } from '@/hooks/useFetchUsers'
import CreateUserDialog from '../components/create-user-dialog'

export default function Users() {
  const { users, loading } = useFetchUsers()

  return (
    <main className="flex flex-col flex-1 w-full min-h-screen bg-white">
      {loading ? (
        <div className='flex flex-1 justify-center items-center'>
          <Loading />
        </div>
      ) : (
        <>
          <div className="m-12">
            <h1 className="text-2xl font-bold text-slate-900">
              Usuários
            </h1>
            <div className="flex gap-2 mt-4 justify-between items-center">
              <div className='flex gap-x-4'>
                <div className="flex relative">
                  <MagnifyingGlassIcon className="absolute top-2 left-1.5 w-5 h-5 text-zinc-800" />
                  <Input className='shadow-none px-7' />
                </div>
                <Button variant="secondary">
                  Filtrar
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircledIcon className="w-5 h-5 mr-2 text-white" />
                    Novo usuário
                  </Button>
                </DialogTrigger>
                <CreateUserDialog />
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 px-12">
            <div className="flex border border-gray-200 rounded-md overflow-y-auto">
              <UsersTable data={users} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}