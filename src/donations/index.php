<!DOCTYPE html>
<html lang="en">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="stylesheets/index.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
  <body>
    <?php include'../navbar.php';?>
    <div>WIP</div>
	
    </div>
    <script type="text/javascript" src="./js/snake.js"></script>
    <script type="text/javascript">
	var mySnakeBoard;
	function snek(){
		document.body.innerHTML = "";
		var el = document.createElement('div');
		el.id = "game-area";
		document.body.appendChild(el);
		
		var link = document.createElement('link');
		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = "http://www.me.umn.edu/~dockt036/css/snake.css"; //TODO: Download to website
		document.head.appendChild(link); //License on website
		mySnakeBoard = new SNAKE.Board({
			boardContainer: "game-area",
            fullScreen: true
        });
	};
	//window.onload = snek;
	//var pos = 0;
	/*function onKeyPress(e){
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
	//document.onkeypress = onKeyPress;*/
    </script>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>

