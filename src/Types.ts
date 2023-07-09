export interface IUser {
  name: string;
  baseEnthusiasmLevel?: number;
  userName: string;
  created_at: string;
  updated_at: string;
  index: string;
  imagePath: string;
  description: string;
  fileLength: number;
  fileArray : any[];
  files : any[];
  owner:MyObject
  }


  interface MyObject {
    [k: string]: any;
  }