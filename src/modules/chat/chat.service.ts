import { Injectable } from '@nestjs/common';
import { JwtStrategy } from '../auth/guards/jwt.strategy';

@Injectable()
export class ChatService {
  constructor(private readonly jwtStrategy: JwtStrategy) {}

  async getUserFromSocket(token: string) {
    const user = this.jwtStrategy.verifyToken(token);
    console.log('userr', user);
    return user;
  }
}
