import { z } from 'zod'
import { useState } from 'react'
import { AxiosError } from 'axios'
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
import { useToast } from '@/components/ui/use-toast'
import {
  formatToCPF,
  formatToPhone,
  isCPF,
  isPhone
} from 'brazilian-values'
import AxiosAdapter from '@/infra/http/axios-adapter'
import UsersGatewayHttp from '@/infra/gateway/users/UsersGatewayHttp'
import { extractDigits } from '@/utils/extract-digits'
import { useCreateUserDialogStore } from '@/app/stores/create-user-dialog-store'

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
  phone: z.string()
    .min(1, 'Insira um celular!')
    .refine((value) => isPhone(value), {
      message: 'Insira um celular válido!',
    }),
})

type CreateUserShema = z.infer<typeof createUserSchema>

type CreateUserDialogProps = {
  onCallback: () => Promise<void>
}

export default function CreateUserDialog(props: CreateUserDialogProps) {
  const [loading, setLoading] = useState(false)

  const { setOpen } = useCreateUserDialogStore()

  const { toast } = useToast()

  const { register, handleSubmit, setValue, formState: {
    errors
  } } = useForm<CreateUserShema>({
    resolver: zodResolver(createUserSchema)
  })

  async function handleCreateUser(data: CreateUserShema) {
    setLoading(true)

    const cleanedPhone = extractDigits(data.phone)
    const cleanedCPF = extractDigits(data.cpf)

    try {
      const httpClient = new AxiosAdapter()
      const usersGateway = new UsersGatewayHttp(httpClient)
      const response = await usersGateway.saveUser({
        ...data,
        cpf: cleanedCPF,
        phone: cleanedPhone
      })
      toast({
        title: 'Sucesso',
        description: 'Usuário cadastrado com sucesso.',
        style: { backgroundColor: '#4CAF50', color: '#fafafa' }
      })
      await props.onCallback()
      return response
    } catch (error) {
      const err = error as AxiosError<{ message: string }>
      if (
        err.response?.data &&
        err.response.data.message === 'Email already exists'
      ) {
        toast({
          title: 'E-mail já cadastrado',
          description: 'Esse e-mail já está associado a uma conta.',
          variant: 'destructive'
        })
      }
      if (
        err.response?.data &&
        err.response.data.message === 'CPF already exists'
      ) {
        toast({
          title: 'CPF já cadastrado',
          description: 'Esse CPF já está associado a uma conta.',
          variant: 'destructive'
        })
      }
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  function handleOnChangeCPF(e: React.ChangeEvent<HTMLInputElement>) {
    const formattedCPF = formatToCPF(e.target.value)
    setValue('cpf', formattedCPF, { shouldValidate: true })
  }

  function handleOnChangeCell(e: React.ChangeEvent<HTMLInputElement>) {
    const formattedCell = formatToPhone(e.target.value)
    setValue('phone', formattedCell, { shouldValidate: true })
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
              id='phone'
              maxLength={16}
              {...register('phone')}
              onChange={handleOnChangeCell}
            />
          </div>
          {errors.phone &&
            <span className='text-sm text-red-500'>
              {errors.phone.message}
            </span>}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button>{loading ? 'Salvando' : 'Salvar'}</Button>
          </DialogFooter>
        </div>
      </form>
    </DialogContent>
  )
}