import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'elwin roman' },
    { id: '2', name: 'pedro pedro pe' },
  ]

  findAll() {
    return this.users
  }

  findById(id) {
    const user = this.users.find(user => user.id == id)

    if (!user) throw new NotFoundException(`Usuario no encontrado ${id}`)

    return user
  }

  createUser(createUserDto: any) {
    this.users.push({
      ...createUserDto,
    })

    return {
      action: 'Usuario creado',
      ...createUserDto,
    }
  }

  updateUser(updateUserDto: any, id: string) {
    const userIndex = this.users.findIndex(user => user.id == id)

    if (userIndex < 0) throw new NotFoundException(`Usuario no encontrado para updatear con id ${id}`)

    this.users[userIndex].id = updateUserDto.id
    this.users[userIndex].name = updateUserDto.name

    return { action: 'usuario actualizado', ...this.users[userIndex] }
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex(user => user.id == id)

    if (userIndex < 0) throw new NotFoundException(`Usuario no encontrado para eliminar con id ${id}`)

    const deleteUser = this.users[userIndex]
    const newUsers = this.users.filter(user => {
      if (user.id != id) return user
    })

    this.users = newUsers
    return { action: 'usuario eliminado', ...deleteUser }
  }
}
