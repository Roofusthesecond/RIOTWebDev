<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Web Development</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="/stylesheets/index.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  		<style type="text/css">
  			.group-div{
				//border: 2px solid #666;	
				border-radius: 10px;
				height: 500px;
			} 
			.trello-groups {
				height: 100%;
				width: 100%;
			} 
  		</style>
		<script src="/js/riot-trello/dist/riot-trello.js"></script>
  </head>
  <body>
    <?php include'../../navbar.php';?>
    <div class="container-fluid text-center">
		<div class="row">
			<div class="col-md-12">
				<h1 style="font-weight: 200; padding: 30px;">Web Development</h1>
				<div style="color: #FFFFFF;">Irony</div>
				<div>
					<p style="font-weight:200">Don't make us hack you with our blackhat html hacker skills.</p>
				</div>
			</div>
			<div id="Web-Development" class="col-md-12 group-div inside-div-trello">
				<div id="trello-web-dev"  class="trello-groups">
					<riot-trello src=""></riot-trello>
					<iframe class="trello-groups" frameborder="0" src="https://trello.com/b/VqeyyqrX.html"></iframe>
				</div>
				<div>
					<h1 style="font-weight:200;">Our Leader <3</h1>
					<img src="/img/dreamdaddy.png" style="width: 100%;"/>
				</div>
			</div>
		</div>
    </div>
    

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
	<script src="/js/egg.js"></script>
	<script src="/easter-eggs/boner.js" async></script>
	<script src="/easter-eggs/libdoge.js" async></script>
	<script>
		let inner = document.getElementById('Web-Development');
		
		function spawnYT(){
			inner.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/H3oiThw2RxE?autoplay=1" frameborder="0" align="center" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		
		let b = new Egg('boner', function(){
			console.log('Boi');
			$("body").boner({
				bSize : 20,
				bSpeed : 30
			});	
		});
		let t = new Egg('thanks', function(){
			console.log('Thanks');
			inner.innerHTML = '<embed src="/easter-eggs/thankstanks.swf" width="600" height="350"></embed>';
		});
		let d = new Egg('doge', function(){
			console.log('Very anger');
			controller.buyDoge();
		}, {continue: true});
		let dc = new Egg('money', function(){
			console.log('The superior currency has arrived!');
			spawnYT();
		});
		let beauty = new Egg('beauty', function(){
			console.log('POWER');
			for(let i = 0; i != 5; i++){
				controller.buyDoge();
			}
			spawnYT();
		});
		let nick = new Egg('nick', function(){
			console.log('NOT THE BEES');
			document.head.innerHTML += '<style>*{background-image: url("/img/nick.jpg")}</style>';
		});
	</script>
  </body>
</html>

