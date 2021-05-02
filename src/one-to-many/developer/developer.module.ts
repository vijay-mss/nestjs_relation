import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeveloperController } from './developer.controller';
import { DeveloperRepository } from './developer.repository';
import { DeveloperService } from './developer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeveloperRepository])
  ],
  controllers: [DeveloperController],
  providers: [DeveloperService]
})
export class DeveloperModule {}
