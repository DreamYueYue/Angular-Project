import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {
  msg: string = "呵呵";
  constructor() {}

  getValue() {
    return this.msg;
  }

  // getFileContent(): any {
  //   fs.readFile(path.join(__dirname, '1.txt'), "utf-8", (err, data) => {
  //     if (err)
  //       throw err;
  //     console.log(data);
  //     return data;
  //   });
  // }
}