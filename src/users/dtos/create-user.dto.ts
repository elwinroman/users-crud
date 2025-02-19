import { IsNumberString, IsString } from 'class-validator'

export class CreateUserDto {
  @IsNumberString()
  id: number

  @IsString()
  name: string
}
