import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors)=>{
  
        const formattedErrors = errors.map(error => ({
          property: error.property,
          contraint: Object.values(error.constraints ?? {})[0],
        }));
  
        return new BadRequestException({
          errors: formattedErrors,
        });
      },
      stopAtFirstError: true,
    })
  );

  app.enableCors({
    origin: "*"
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
