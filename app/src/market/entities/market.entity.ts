import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Market {
    @PrimaryColumn()
    id: string;

    @Column()
    designation: string;

    @Column()
    district: string;

    @Column({ default: 0})
    stalls: number;
}
