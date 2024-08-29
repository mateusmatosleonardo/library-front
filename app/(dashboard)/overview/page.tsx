'use client'

import { BookAnalytics } from './components/BookAnalytics';
import { LoanAnalytics } from './components/LoanAnalytics';

export default function OverView() {
  const data = [
    { name: 'Group A', value: 40 },
    { name: 'Group B', value: 60 },
  ];

  const dataMonth = [
    {
      name: 'Semana 1',
      emprestimos: 40,
    },
    {
      name: 'Semana 2',
      emprestimos: 50,
    },
    {
      name: 'Semana 3',
      emprestimos: 35,
    },
    {
      name: 'Semana 4',
      emprestimos: 68,
    },
    {
      name: 'Semana 5',
      emprestimos: 70
    },
  ];

  return (
    <main className="flex flex-1 flex-col w-full">
      <div className='bg-white min-h-[77px] h-[77px]'>
        Colocar algo aqui
      </div>

      <div className='flex p-10 gap-x-14'>
        <div className='flex flex-col w-full gap-y-8'>
          <LoanAnalytics data={dataMonth} />
          <div className='bg-white flex flex-col w-full p-8 rounded-3xl'>
            <span className='font-semibold'>
              Buscar livro
            </span>
          </div>
        </div>

        <div>
          <BookAnalytics data={data} />
          <div className='bg-white flex flex-col flex-1 mt-10 w-full p-8 rounded-3xl'>
            <span className='font-semibold'>
              Livros mais emprestados
            </span>
            <div className='flex flex-col space-y-7 mt-6'>
              <div className='flex items-center space-x-4'>
                <div className='flex justify-center items-center w-[31px] h-[31px] bg-[#F93535] rounded-md'>
                  <span className='font-semibold text-white'>
                    1
                  </span>
                </div>

                <div className='w-full flex flex-col gap-y-1 flex-1'>
                  <span>
                    Harry Potter.
                  </span>
                  <div className='h-1 bg-[#F93535] rounded-sm' />
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='flex justify-center items-center w-[31px] h-[31px] bg-[#356CF9] rounded-md'>
                  <span className='font-semibold text-white'>
                    2
                  </span>
                </div>

                <div className='w-full flex flex-col gap-y-1 flex-1'>
                  <span>
                    O Alquimista.
                  </span>
                  <div className='h-1 bg-[#356CF9] rounded-sm' />
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='flex justify-center items-center w-[31px] h-[31px] bg-[#F9C235] rounded-md'>
                  <span className='font-semibold text-white'>
                    3
                  </span>
                </div>

                <div className='w-full flex flex-col gap-y-1 flex-1'>
                  <span>
                    O Código da Vinci.
                  </span>
                  <div className='h-1 bg-[#F9C235] rounded-sm' />
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='flex justify-center items-center w-[31px] h-[31px] bg-[#35B2F9] rounded-md'>
                  <span className='font-semibold text-white'>
                    4
                  </span>
                </div>

                <div className='w-full flex flex-col gap-y-1 flex-1'>
                  <span>
                    O Senhor dos Anéis.
                  </span>
                  <div className='h-1 bg-[#35B2F9] rounded-sm' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}