import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly username?: string;

  @IsOptional()
  @IsString()
  readonly displayName?: string;

  @IsOptional()
  @IsString()
  readonly avatarURL?: string;
}
