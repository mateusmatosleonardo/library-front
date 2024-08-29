import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

type LoanAnalyticsProps = {
  data: any
}

export function LoanAnalytics({ data }: LoanAnalyticsProps) {
  return (
    <div className='bg-white flex flex-col w-full p-8 rounded-3xl'>
      <span className='font-semibold'>
        Estatística de empréstimos
      </span>
      <div className='flex items-center w-full max-w-[390px] mt-4 px-2 py-1 gap-x-2 rounded-md bg-background'>
        <div className='w-3.5 h-3.5 rounded-sm bg-[#F97035]' />
        <span>Quantidade de livros emprestados em cada semana</span>
      </div>
      <ResponsiveContainer width="100%" height={400} className="mt-10">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="25%"
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="emprestimos" fill="#F97035" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}