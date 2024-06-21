import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Usersmodule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_tutorial'),
    Usersmodule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
