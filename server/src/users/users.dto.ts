export class CreateUserDto {
  name: string;
  telegram: string;
}

export class UpdateUserDto {
  id: string;
  name?: string;
  telegram?: string;
}
