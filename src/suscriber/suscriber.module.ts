import { Module } from '@nestjs/common';
import { SuscriberController } from './controllers/suscriber/suscriber.controller';
import { SuscriberService } from './services/suscriber/suscriber.service';

@Module({
  controllers: [SuscriberController],
  providers: [SuscriberService]
})
export class SuscriberModule {}
