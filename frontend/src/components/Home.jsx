<html>
<head>
<title>Register Patient</title>
</head>
    <body>
	<p><a href="hospital.html"><button type="submit" class="hidden" style='margin-right:16px'>Hospital Registration</button></a><a href="doctor.html"><button type="submit" class="hidden" style='margin-right:16px'>Doctor Registration</button></a><a href="patient_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Patient Details</button></a><a href="record_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Medical Record</button></a><a href="examine_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Patient Examine details</button></a></p>
      
        <h1>Patient Registration</h1>
        <script src="https://cdn.jsdelivr.net/npm/web3@1.2.8/dist/web3.js"></script>
           
        <h2>Register Patient</h2>
    <form>
		<table style="width:25%"> 
            <tr>
			<td>Enter Patient Id:</td>
			<td><input type="text" id="id1" name="id1"></td>
		  </tr>
            <tr>
			<td> Patient Name:</td>
			<td><input type="text" id="name1" name="name1"></td>
		  </tr>
		  <tr>
			<td>Age:</td>
			<td><input type="text" id="age" name="age"></td>
		  </tr>
		   
		   <tr>
			<td>Gender:</td>
			<td><input type="text" id="gen" name="gen"></td>
		  </tr>
            <tr>
			<td>Height(in ft):</td>
			<td><input type="text" id="hght" name="hght"></td>
		  </tr>
		  <tr>
			<td>Weight(in kg):</td>
			<td><input type="text" id="weig" name="weig"></td>
		  </tr>
		  <tr>
			<td>Address:</td>
			<td><input type="text" id="addr" name="addr"></td>
		  </tr>
		  <tr>
			<td>Phone Number:</td>
			<td><input type="text" id="pno" name="pno"></td>
		  </tr>
		  <tr>
			<td>Email Id:</td>
			<td><input type="text" id="email" name="email"></td>
		  </tr>
		  <tr>
			<td>Date:</td>
			<td><input type="text" id="date" name="date"></td>
		  </tr>
          		 
		</table>
		
	</form>
	<h2> Patient's Attendant Details</h2>
    <form>
		<table style="width:25%"> 
            <tr>
			<td>Enter Patient Id:</td>
			<td><input type="text" id="id2" name="id2"></td>
		  </tr>
            <tr>
			<td> Attendant Name:</td>
			<td><input type="text" id="aname1" name="aname1"></td>
		  </tr>
		  <tr>
			<td>Attendant Relation:</td>
			<td><input type="text" id="rel" name="rel"></td>
		  </tr>
		   
		   <tr>
			<td>Phone Number:</td>
			<td><input type="text" id="apno" name="apno"></td>
		  </tr>
                      
		</table>
		</form>
		  <form>
		<table style="width:25%">
		  <tr>
			<td><input type="button" onclick="add_details()" value="Register"></td>
		  </tr>
		  </table>
		</form>
		
	
        <h3>To get details of a patient  <a href="patient_details.html">Click Here</a></h3>
    </body>
</html>