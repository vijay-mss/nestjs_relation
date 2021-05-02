import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ProfileModule } from './one-to-one/profile/profile.module';
import { UserModule } from './one-to-one/user/user.module';
import { TaskModule } from './one-to-many/task/task.module';
import { DeveloperModule } from './one-to-many/developer/developer.module';

@Module({
  imports: [ProfileModule, UserModule,  TypeOrmModule.forRoot(typeOrmConfig), TaskModule, DeveloperModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
