import { PieChart, Pie, Cell } from 'recharts'

type BookAnalyticsProps = {
  data: any
}

export function BookAnalytics({ data }: BookAnalyticsProps) {
  const COLORS = ['#3560F9', '#F97035'];

  return (
    <div className='flex flex-col p-8 h-[440px] rounded-3xl bg-white'>
      <span className='font-semibold'>
        Estatística de livros
      </span>
      <PieChart width={280} height={300}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className='flex flex-col gap-y-2'>
        <div className='flex items-center gap-x-2'>
          <div className='w-3.5 h-3.5 rounded-sm bg-[#3560F9]' />
          <span>Livros disponíveis</span>
        </div>
        <div className='flex items-center gap-x-2'>
          <div className='w-3.5 h-3.5 rounded-sm bg-[#F97035]' />
          <span>Livros emprestados</span>
        </div>
      </div>
    </div>
  )
}