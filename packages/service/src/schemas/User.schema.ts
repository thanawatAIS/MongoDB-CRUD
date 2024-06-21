import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({unique : true, required : true})
  username: string;

  @Prop({require : false})
  displayName?: string;

  @Prop({require : false})
  avatarUrl?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);