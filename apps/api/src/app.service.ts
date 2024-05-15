import { Injectable } from '@nestjs/common';
import { MyLib } from '@repo/lib';

@Injectable()
export class AppService {
  getHello(): string {
    // const ad = add(1,3 )
    const myLib = new MyLib();
    const add = myLib.add(1,3);
    return 'Hello World!'  + add;
  }
}
