import React from 'react'
import "./RegisterPatientForm.css"

const RegisterPatientForm = () => {
  return (
    <div><div>RegisterPatientForm</div>
        <div id="bg">
       <center> </center>
      <br>
      
       
        <b><u> <h1 >PATIENT REGISTRATION FORM</h1></u> </b> 
        <div id="form">
            <form method="get" action="submit.html">
                <table id="table">
                    <tr>
                        <td>PATIENT NAME:</td>
                        <td>
                            <input type="text" name="username" size="30"
                            maxlength="30" placeholder=" Your Name" />
                            (max 30 characters A-Z and a-z)
                        </td>
                    </tr>
                    <tr>
                        <td>PATIENT ID. :
                            </td>
                        <td><input type="text" name="username" size="30"
                            maxlength="30" placeholder="Patient ID" /> 
                             (max 30 characters A-Z and a-z)
                            </td>
                    </tr>
                    

                    <tr>
                        <td>EMAIL ID:
                            </td>
                        <td><input id="email" type="email" name="email" size="30" maxlength="100" placeholder="EMAIL" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MOBILE NO:
                            
                        </td>
                        <td><input type="tel" name="number" size="30" maxlength="12" placeholder="Enter Mobile no"/>
                            
                            (10 digits number)
                        </td>
                            
                    </tr>
                    <tr>
                        <td>GENDER:</td>
                        <td><input id="female" type="radio" name="gender"
                            value="f">
                            <label for="female">Female</label>
                            <input id="male" type="radio" name="gender"
                            value="m">
                            <label for="male">Male</label>
                            </td>
                    </tr>
                  
                  
                    <tr><td>ADDRESS:</td>
                    <td><textarea rows="4" cols="40" id="comments">
                    </textarea>
                    </td></tr>
                    <tr>
                        <td>CITY:</td>
                        <td>
                            <input type="text" name="city" size="30"
                            maxlength="30" placeholder="Enter your city name" /></td>
                            
                           
                    </tr>
                    <tr>
                    
                    <td>PIN CODE:</td>
                        <td>
                            <input type="text" name="pin" size="30"
                            maxlength="30" placeholder="Enter pin code" />
                            (6 digits number)
                        </td>
                    </tr>
                    <tr>
                        <td>STATE:</td>
                        <td>
                            <input type="text" name="state" size="30"
                            maxlength="30" placeholder="Enter your state name" /></td>
                            
                           
                    </tr>
                    <tr>
                        <td>COUNTRY:</td>
                        <td>
                            <input type="text" name="COUNTRY" size="30"
                            maxlength="30" placeholder="Enter your city name" /></td>
                            
                           
                    </tr>
                    
                
                    
                <tr>
                    <td>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                </td>
                </tr>

                    
                
                    


                    
                </table>
            </form>


        </div>
 
     </div>
    </div>
  )
}

export default RegisterPatientForm