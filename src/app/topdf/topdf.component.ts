import { Component} from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { Data } from '../data';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-topdf',
  templateUrl: './topdf.component.html',
  styleUrls: ['./topdf.component.css']
})
export class TopdfComponent   {
  id:number;
  employee_id:number;
  firstName:any;
  lastName:any;
  salary:number;
  designation:any;
  employeeObj:any;
  inputRecord:any;

  

employee=[
  {id:1,employee_id:2343892,firstName:"Ram",lastName:"Manas",salary:"15000000",designation:"Religious Person"},
  {id:2,employee_id:2343893,firstName:"Narendra",lastName:"Bose",salary:"12000000",designation:"Team Lead"},
  {id:3,employee_id:2343894,firstName:"Honey",lastName:"Singh",salary:"25000000",designation:"Freelancer"},
  {id:4,employee_id:2343895,firstName:"Sandeep",lastName:"Maheswari",salary:"30000000",designation:"Motivational speaker"}

  ];

  remove(index){
   this.employee.splice(index,1);
   }


   record(myForm:NgForm){
    this.inputRecord=myForm.value;
    console.log(JSON.stringify(this.inputRecord));

     }



   add(){
   
    this.employee.push(this.inputRecord);
    
  }





  
  public captureScreen()  {  

    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  
}  


