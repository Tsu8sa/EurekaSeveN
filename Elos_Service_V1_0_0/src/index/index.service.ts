import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

import { Admin } from './index.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IndexService {
  constructor(
    //将集合名注入   表名 mongoDB
    @InjectModel('Administrator') private readonly adminModel: Model<Admin>,
    private readonly httpService: HttpService,
  ) {}

  getDailyImg(): Observable<AxiosResponse<IndexService[]>> {
    return this.httpService.get(
      'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
    );
  }

  async findAdmin(): Promise<Admin[]> {
    return await this.adminModel.find().exec();
  }
}
