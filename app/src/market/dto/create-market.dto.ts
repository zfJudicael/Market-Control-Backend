import { IsString } from "class-validator";

export class CreateMarketDto {
    @IsString()
    id: string;

    @IsString()
    designation: string;
    
    @IsString()
    district: string
}
