import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp3';
  showRegister: boolean = false;
  showShowUsers: boolean = true ;

  dob: string=""  ;
  name: string ="";
  email: string="";
  college : string="" ;
  school : string="" ;
  


  up_dob: string=""  ;
  up_name: string ="";
  up_email: string="";
  up_college : string="" ;
  up_school : string="" ;
  up_id : any ;

  tuser : any ;

  showUpdateForm : boolean=false;
  showDeleteForm : boolean=false ;

  showTable: boolean= false;
  Users : any= [
    {
      "name": "hbsmvnx",
      "school": "rebn",
      "college": "fhbs",
      "dob": "rhb",
      "email": "rfbh.com",
      "id": 1
    },
    {
      "name": "hbsmvnx",
      "school": "rebn",
      "college": "fhbs",
      "dob": "rhb",
      "email": "rfbh.com",
      "id": 2
    },
    {
      "name": "hbsmvnx",
      "school": "rebn",
      "college": "fhbs",
      "dob": "rhb",
      "email": "rfbh.com",
      "id": 3
    },
    {
      "name": "hbsmvnx",
      "school": "rebn",
      "college": "fhbs",
      "dob": "rhb",
      "email": "rfbh.com",
      "id": 4
    }
  ];

    onClickShowUsers = async () =>{
      this.showTable = true;
        // const response = await fetch("http://localhost:3000/users",{
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     "name": "David",
        //     "age": this.showShowUsers
        //   })
        // });
        // const jsonData = await response.json();
        // console.log(jsonData);
      
    // this.showRegister = !this.showRegister ;
    this.showRegister = false ;
    this.showDeleteForm= false ;
    this.getapi();
    
   }

   onClickRegister = async () => {
    await fetch("http://localhost:3000/users",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name": this.name,
            "school": this.school ,
            "college":this.college,
            "dob" : this.dob,
            "email" : this.email
      
        })
        }).then(res=>{
          console.log("APi Response", res)
        }).catch((error)=>{
          console.log("Api error", error)
        })
    console.log({
      "name": this.name,
      "school": this.school ,
      "college":this.college,
      "dob" : this.dob,
      "email" : this.email

  });
    
    this.showShowUsers = !this.showRegister ;
    this.showRegister = false ;
    alert(" Registered succesfully");
   }

  clicksignin()
  {
     this.showTable = false;
     this.showRegister =true ;
     this.showDeleteForm= false;
  }

  // clickregister()
  // {
  //   this.showTable = false;
  //   this.showRegister = false ;
  // }

   backBtn()
   {
      this.showTable = false;
      this.showRegister = false;
   }
   getapi = async () =>
   {
    const tempvar=  await fetch("http://localhost:3000/users",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }})
      
    const data= await tempvar.json();
    this.Users=data;

   }
   updateuserdata(tuser : any)
   {
          console.log("updated");
          this.showUpdateForm = true;
          this.showRegister = false;
          this.showShowUsers =true ;
          this.showTable =false ;
          

          this.up_id = tuser.id ;
          this.up_name     =  tuser.name  ;
          this.up_dob =   tuser.dob  ;
       this.up_email    =   tuser.email  ;
          this.up_school=   tuser.school  ; 
           this.up_college =   tuser.college  ;
       
   }
    onClickUpdate = async () => 
   {




            const response = await fetch(`http://localhost:3000/users/${this.up_id}`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          "id" : this.up_id ,
          "name" : this.up_name,
          "dob" : this.up_dob ,
          "email" : this.up_email ,
          "school": this.up_school ,
          "college" : this.up_college 
          })
        });
          
      console.log(this.up_id);
      this.showUpdateForm = false;
      this.showRegister = false;
      this.showShowUsers =true ;
      this.showTable =false ;
      alert(" Updated succesfully");
   }
   deleteuserdata(tuser : any)
   {
          console.log("updated");
          this.showUpdateForm = false;
           this.showDeleteForm = true ;
          this.showRegister = false;
          this.showShowUsers =true ;
          this.showTable =false ;
          

          this.up_id = tuser.id ;
          this.up_name     =  tuser.name  ;
          this.up_dob =   tuser.dob  ;
       this.up_email    =   tuser.email  ;
          this.up_school=   tuser.school  ; 
           this.up_college =   tuser.college  ;
       
   }
   onClickDelete = async () => 
   {
    const response = await fetch(`http://localhost:3000/users/${this.up_id}`,{
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
  
    });
      
  console.log(this.up_id);
  this.showShowUsers =true ;
  this.showTable =false ;
  this.showDeleteForm =false ;
  alert(" Deleted succesfully");
   }
     
}


