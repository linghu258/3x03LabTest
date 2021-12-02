<?php 
	session_start();
	
	if(isset($_POST['submit']))
	{
		if((isset($_POST['text']) && $_POST['text'] !=''))
		{
			$text = trim($_POST['text']);
			$errorMsg = "Login failed";
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
</head>

<body>
	
	<div class="container">
		<h1>PHP Login and Logout with Session</h1>
		<?php 
			if(isset($errorMsg))
			{
				echo "<div class='error-msg'>";
				echo $errorMsg;
				echo "</div>";
				unset($errorMsg);
			}
		?>
		<form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
			<div class="field-container">
				<label>Search:</label>
				<input type="text" name="text">
			</div>
			<div class="field-container">
				<button type="submit" name="submit">Search</button>
			</div>
			
		</form>
	</div>
</body>
</html>
