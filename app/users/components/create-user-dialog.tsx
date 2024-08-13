import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import {
  formatToCPF,
  formatToPhone,
  isCPF,
  isPhone
} from 'brazilian-values'

const createUserSchema = z.object({
  name: z.string().min(4, 'Insira um nome!'),
  email: z.string()
    .min(1, 'Insira um e-mail!')
    .email('Insira um e-mail válido!'),
  cpf: z.string()
    .min(1, 'Insira um CPF!')
    .refine((value) => isCPF(value), {
      message: 'Insira um CPF válido!',
    }),
  cell: z.string()
    .min(1, 'Insira um celular!')
    .refine((value) => isPhone(value), {
      message: 'Insira um celular válido!',
    }),
})

type CreateUserShema = z.infer<typeof createUserSchema>

export default function CreateUserDialog() {
  const { register, handleSubmit, setValue, formState: {
    errors
  } } = useForm<CreateUserShema>({
    resolver: zodResolver(createUserSchema)
  })

  function handleCreateUser(data: CreateUserShema) {
    console.log(data)
  }

  function handleOnChangeCPF(e: React.ChangeEvent<HTMLInputElement>) {
    const formattedCPF = formatToCPF(e.target.value)
    setValue('cpf', formattedCPF, { shouldValidate: true })
  }

  function handleOnChangeCell(e: React.ChangeEvent<HTMLInputElement>) {
    const formattedCell = formatToPhone(e.target.value)
    setValue('cell', formattedCell, { shouldValidate: true })
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo usuário</DialogTitle>
        <DialogDescription>
          Cadastrar um novo usuário
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className='space-y-3'>
          <div>
            <Label>
              Nome
            </Label>
            <Input id='name' {...register('name')} />
            {errors.name &&
              <span className='text-sm text-red-500'>
                {errors.name.message}
              </span>}
          </div>
          <div>
            <Label>
              E-mail
            </Label>
            <Input id='email' {...register('email')} />
            {errors.email &&
              <span className='text-sm text-red-500'>
                {errors.email.message}
              </span>}
          </div>
          <div>
            <Label>
              CPF
            </Label>
            <Input
              id='cpf'
              {...register('cpf')}
              maxLength={14}
              onChange={handleOnChangeCPF}
            />
            {errors.cpf &&
              <span className='text-sm text-red-500'>
                {errors.cpf.message}
              </span>}
          </div>
          <div>
            <Label>
              Celular
            </Label>
            <Input
              id='cell'
              maxLength={16}
              {...register('cell')}
              onChange={handleOnChangeCell}
            />
          </div>
          {errors.cell &&
            <span className='text-sm text-red-500'>
              {errors.cell.message}
            </span>}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button>Salvar</Button>
          </DialogFooter>
        </div>
      </form>
    </DialogContent>
  )
}