<!DOCTYPE html>
<html lang="en">
	<head>
		<title>RIOT Groups</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="stylesheet" type="text/css" href="/stylesheets/index.css">
    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
		<style>
			.group-div{
				border: 2px solid #666;	
				border-radius: 10px;
				height: 400px;
			}
		</style>
  	</head>
  		<body>
    			<?php include'../navbar.php'; ?>
    			<div class="container">
				<div class="row">
					<div class="col-md-4 group-div" id="Web-Development">
								<div id="trello-web-dev"></div>
					</div>
					<div class="col-md-4 group-div" id="Robotics">Robotics</div>
					<div class="col-md-4 group-div" id="Cyber-Security">Cyber Security</div>
				</div>
				<div class="row">
					<div class="col-md-4 group-div" id="Programming">Programming</div>
					<div class="col-md-4"></div>
					<div class="col-md-4 group-div" id="Management-and-Development">Management and Development</div>
				</div>
			</div>

    			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
   			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
   			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
   			<script type="text/javascript">
   					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
   						 if (this.readyState == 4 && this.status == 200) {
       				
       							
       						console.log(JSON.parse(xhttp.responseText));
   						 }
					};
					xhttp.open("GET", "https://api.trello.com/1/boards/Pyu6jFOD/lists?cards=all&card_attachments=cover&key=603ba6a5be46a1a5b705908ae815ad07&token=3edb80def94ba084c1d4b5ee7886655ae17fe48dae0547966efadb829a523428", true);
					xhttp.send();

					document.getElementById("Web-Development").style.backgroundColor = "#000000";
   			</script>
  		</body>
</html>
