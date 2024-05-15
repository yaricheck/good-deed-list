import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updatedUser: User): User {
    let user = this.users.find((user) => user.id === id);
    if (user) {
      user = { ...user, ...updatedUser };
    }
    return user;
  }

  remove(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
