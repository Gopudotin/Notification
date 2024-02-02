
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotificationType } from './type/type.entity';
import { TypeModule } from './type/type.module';
import { TemplateModule } from './template/template.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hp15',
      database: 'lanware',
      autoLoadModels: true,
      synchronize: true, 
    }),
    TypeModule,TemplateModule,NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
