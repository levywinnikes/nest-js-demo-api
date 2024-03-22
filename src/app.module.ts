import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config/dist';
import { TodoModule } from './app/todo/todo.module';


@Module({
  imports: [
TypeOrmModule.forRootAsync(
  {
    imports: [
      ConfigModule
      
    ],
    inject: [
      ConfigService
    ]
    ,
    useFactory: (configServices: ConfigService) => ({
        type: 'mariadb',
        //First parameter is Envolviment Variable if not exist use localhost
        host: configServices.get('DB_HOST', 'localhost'),
        port: Number(configServices.get('DB_PORT',3306)),
        username:  configServices.get('DB_USERNAME','root'),
        password:  configServices.get('DB_PASSWORD','123'),
        database:  configServices.get('DB_DATABASE','todo'),
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
        synchronize: true,
    })
  }
),
TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
