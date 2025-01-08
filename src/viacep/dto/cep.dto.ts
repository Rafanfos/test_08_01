import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CepDto {
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(8)
  @IsString()
  cep: string;
}
