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

export default function CreateUserDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo usuário</DialogTitle>
        <DialogDescription>
          Cadastrar um novo usuário
        </DialogDescription>
      </DialogHeader>
      <form action="">
        <div className='space-y-3'>
          <div>
            <Label>
              Nome
            </Label>
            <Input />
          </div>
          <div>
            <Label>
              E-mail
            </Label>
            <Input />
          </div>
          <div>
            <Label>
              CPF
            </Label>
            <Input />
          </div>
          <div>
            <Label>
              Celular
            </Label>
            <Input />
          </div>
        </div>
      </form>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">Cancelar</Button>
        </DialogClose>
        <Button>Salvar</Button>
      </DialogFooter>
    </DialogContent>
  )
}