export interface IStore
{
  Id:number;
  Name:string;
  Description:string;
  Country:string;
  City:string;
  Street:string;
  Image:File;
  IsDeleted:boolean;
  IsConfirmed:boolean;
  VendorId:number;
  CategoryId:number
  Specialty:string;

}
