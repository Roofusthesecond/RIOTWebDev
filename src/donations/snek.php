<!DOCTYPE html> 
<html>
<head>
    <title>JavaScript Snake</title>
    <link rel="stylesheet" type="text/css" href="http://www.me.umn.edu/~dockt036/css/snake.css" />
</head>
<body>
    <div id="game-area" tabindex="0">
    </div>
    <script type="text/javascript" src="http://www.me.umn.edu/~dockt036/js/snake.js"></script>
    <script type="text/javascript">
    var mySnakeBoard = new SNAKE.Board(  {
                                            boardContainer: "game-area",
                                            fullScreen: true
                                        });    
    </script>
</body>
</html>