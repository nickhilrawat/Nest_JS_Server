import { HttpService } from '@nestjs/axios';
export declare class AppService {
    readonly httpService: HttpService;
    constructor(httpService: HttpService);
    findAll(): Promise<any[] | {
        error: any;
    }>;
}
