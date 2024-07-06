'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import UsersTable from './components/users-table';
import users from '@/mocks/users.mock';

export default function Users() {

  return (
    <main className="flex flex-col flex-1 w-full min-h-screen bg-[#F2F2F2]">
      <div className="mx-12 mt-12">
        <h1 className="text-2xl font-bold text-slate-900">
          Usuários
        </h1>
      </div>
      <div className="flex flex-col gap-y-6 px-12 pt-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute top-1.5 left-1 w-5 h-5 text-slate-900" />
          <input
            className="w-full bg-white text-gray-300 border-slate-200 border-[0.5px] py-[3px] pl-7 rounded-sm"
            type="text"
          />
        </div>
        <div className="border border-gray-200 rounded-md">
          <UsersTable data={users} />
        </div>
      </div>
    </main>
  );
}