import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import axios from 'axios';


@Injectable()
export class AppService {
    constructor(readonly httpService: HttpService) {}

    async findAll(){

      const url = 'https://www.nseindia.com/api/latest-circular';
      const headers ={};

      try {
          const response = await axios.get(url,headers);
          const data = [response.data];
          return (data);
        } catch (error) {
          console.error('Error calling external API:', error.message);
         return {error: error};
        }
  };
  }
