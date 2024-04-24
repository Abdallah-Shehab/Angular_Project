import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  StudentName:string=""
  StudentAge:number=0;
  nameError:string= "";
  ageError:string= "";
  SelectedTrack="Select Track";


  Tracks=[
    {name: "PD",location:["Smart","Menoufia"]},
    {name: "SW",location:["Ismalia","Mansoura"]},
    {name: "Graphic",location:["Fayoum","Alex"]},

  ]



  Students:{ID:number;name:string;age:number;}[] = [
    {ID:1,name:"Abdallah",age:22}
    ,{ID:2,name:"mohamed",age:25}
    ,{ID:3,name:"Ahmed",age:24}]

    CheckExists(name:string){
      let res= this.Students.filter(e => e.name.toLowerCase()==name.toLowerCase() );
      if(res.length>0){
        return true;
      }else{
        return false;
      }
     
     }
    Add(e:any){
      e.preventDefault(); 
      // let target = e.target as HTMLInputElement;
      this.StudentName=e.target.st_name.value;
      this.StudentAge=e.target.st_age.value;
       
      if(this.CheckExists(this.StudentName)){
        // alert("Student Already Exists")
        this.nameError="Student already exists";

      }else{

        if(this.StudentName==''){
        this.nameError="Student already exists";

        }
        if(this.checkAge(this.StudentAge) ){
          
          this.Students.push({ID:this.GetLastID(),name:this.StudentName,age:this.StudentAge});
        }else{
          
          // alert("Student is very old")
        this.ageError="Student is too old ";

        }

      }
    }

   GetLastID(){
    let lastid=this.Students.length+1; 
    
    return lastid;
   }

   checkAge(age:number){
    if(age>=20 && age<=30){
      return true;
    }else{
      return false;
    }
   }

   Delete(id:number){
    let res= this.Students.filter(e=>e.ID!=id);
    this.Students=res;
    console.log(this.Students);
   }

   TrackName="";
   TrackLocations:string[]=[];
   UpdateDiv(){
    console.log(this.SelectedTrack);
    for(let track of this.Tracks){
      if(track.name.toLowerCase()==this.SelectedTrack){
        console.log(track.name);
        
        this.TrackName=track.name;
        this.TrackLocations=track.location;
      }
    }
    
   }
}
