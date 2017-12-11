<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Donations</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="/stylesheets/index.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
  <body>
    <?php include'../navbar.php';?>
    <div class="container text-center">
		<h1 style="font-weight: 300;">Donations</h1>
		WIP
	</div>
    <script type="text/javascript">
	function snek(){
		let el = document.createElement('iframe');
		el.src = window.location.protocol + "//" + window.location.hostname + ":" +  window.location.port + "/easter-eggs/snek/";
		console.log(el.src);
		el.frameboarder = "0";
		el.style.cssText = "width: 100%; height:100vh; margin:0; border: none";
		
		document.body.innerHTML = "";
		document.body.appendChild(el);
		document.body.style.cssText = "padding: 0px; margin: 0px; overflow:hidden;";
		//document.body.style.cssText = "position:absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; padding-top: 0px; margin: 0;";
	};
	</script>
	<script>
	//window.onload = snek;
	var pos = 0;
	function onKeyPress(e){
		if(e.key == 'snek'[pos]){
			pos++;
			if(pos === 4){
				document.onkeypress = null;
				snek();
			}
		}else{
			pos = 0;
		}
	}
	document.onkeypress = onKeyPress;
    </script>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>

