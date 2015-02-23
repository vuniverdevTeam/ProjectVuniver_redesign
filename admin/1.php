<?php
   //header('Content-Type: text/html; charset=utf-8');
    $coeff = 6;

    function getMax($arr)
    {
        $counter = 100;
        $tmp = $arr[$counter];
        while ( $counter <= 200 )
        {
            if ($arr[$counter] > $tmp) $tmp = $arr[$counter];
            $counter += 1;
        }
        return $tmp;
    }

    $link = mysql_connect('185.25.117.161', 'vuniver', '5S1CQhvO');
        mysql_query("SET NAMES utf8");
        if (!$link) {
            die('Error: ' . mysql_error());
        }

    $hash = $_POST['hash'];
    $str = explode("|",$hash);
    $query = "select * from vuniver.admins where login='" . $str[1] . "'";

    $result = mysql_query ($query);
    while ($row = mysql_fetch_row($result)) {
        if ( ( md5($row[1]) == $str[0] ) )
        {
            echo '<script type="text/javascript">
            	var coeff = 1.3;
            	function inc()
            	{
            		var arr = document.getElementsByClassName("img");
            		for(var i = 0; i < arr.length; i++)
            		{
            			arr[i].height = arr[i].height * coeff;
            		}
            	}
            	function dec()
            	{
            		var arr = document.getElementsByClassName("img");
            		for(var i = 0; i < arr.length; i++)
            		{
            			arr[i].height = (arr[i].height / coeff) + 1;
            		}
            	}
            </script>';

            echo '<link rel="stylesheet" href="1.css" type="text/css"/>';
            echo '<link rel="stylesheet" href="adm.css" type="text/css"/>';
            echo "<script>
                  function init() {
                  aside = document.getElementById('control');
                  t0 = aside.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;
                  window.addEventListener('scroll', function(e) {
                        aside.className = (t0 < window.pageYOffset ? 'sticky' : '');
                    }, false);
                  }
                  window.onload=init;
                  </script>";

            echo '<div id="header">
                   	 		<div id="title">Панель адміністратора</div>
                   		  </div>';
            echo '<div id="control"><div id="hist_table"><table>';
            echo '<tr>';
            echo '<td><img src="2.png" width="12" height="12"/> Контракт</td><td><img src="1.png" width="12" height="12"/> Бюджет</td>';
            echo '</tr>';
			echo '<tr>';
            echo '<td><img src="3.png" width="12" height="12"/> Общие баллы</td><td><div class="box"></div> Мода</td>';
            echo '</tr>';
            echo '</table>';
			echo '</div>';
			echo '<form class="histo-form" action="adminPanel.php" method="post"><input name="hash" value="' . $hash .'" style="visibility: hidden; position: absolute; top: 0px; left: 0px;"><input name="isFromHisto" value="1" style="visibility: hidden; position: absolute; top: 0px; left: 0px;"><input type="submit" value="Назад"></form>';
            echo '<form class="histo-form" action="1.php" method="post"><input name="hash" value="' . $hash .'" style="visibility: hidden; position: absolute; top: 0px; left: 0px;"><input type="submit" value="Выбрать новые наборы У-Ф-С"></form>';
			echo '<form class="histo-form" ><input type="button" onclick="inc()" value=" + "> <input type="button" onclick="dec()" value=" - "></form>';
			echo '</div>';
			
            $total_c = 0;
            $total_b = 0;
            $counter = 100;
			$arr_total = array();

            while ( $counter <= 200 )
            {
                $arr_total[$counter] = 0;
                $counter += 1;
            }			
			
			$query = "select avg_budget_mark, avg_contract_mark from vuniver.facult_spec";
            $result = mysql_query ( $query );
            if (!$result) {
				$message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                die($message);
            }
            while ($row = mysql_fetch_row($result))
            {
                $arr_total[$row[0]] += 1;
				$arr_total[$row[1]] += 1;
                $total_b += 1;
            }			
			
			echo '<h3 style="padding-top: 120px;">Общие баллы: </h3>';
			
			$counter = 100;
            $max = getMax($arr_total);
            while ( $counter <= 200 )
            {
                    $tmp = $arr_total[$counter];
                    $tmpPercent = $tmp/$total_b;
                    $tmpPercent *= 100;
                    $arr_total[$counter] = $arr_total[$counter] / 50;
                    if ($arr_total[$counter] < 1) $arr_total[$counter]=1;
                    if ($tmp == $max) echo '<div class="moda">';
                    else echo '<div class="hist-wrap">';
                    echo '<div class="hist" data-short="' . $counter . '" data-title="' . $counter . '&nbspбаллов ' . $tmpPercent . '&nbsp% ('. $tmp .')"><img class="img" src="3.png" height="' . $arr_total[$counter] . '"/>';
					if ($arr_total[$counter] > 1) echo '<div class="points">' . $counter .'</div>';
					echo '</div>';
                    $counter += 1;
                    echo '</div>';

            }		
			
            $arr_c = array();
            $arr_b = array();


            for($i = 0; $i < 5; $i++)
            {

                    $total_c = 0;
                    $total_b = 0;
                    $counter = 100;

                    while ( $counter <= 200 )
                    {
                        $arr_c[$counter] = 0;
                        $arr_b[$counter] = 0;
                        $counter += 1;
                    }
                    
                     
		    //get rand
		    $query = "select s_id, f_id from vuniver.facult_spec order by RAND() limit 1";
                    $result = mysql_query ( $query );
                    if (!$result) {
                        $message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                        die($message);
                    }
                    while ($row = mysql_fetch_row($result))
                    {
                        $s = $row[0];
                        $f = $row[1];
                    }


                    $query = "select s_name from vuniver.specialities where vuniver.specialities.s_id=" . $s;
                    $result = mysql_query ( $query );
                    if (!$result) {
                        $message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                        die($message);
                    }
                    while ($row = mysql_fetch_row($result))
                    {
                        echo '<br><br><hr><br><br>' . $row[0];
                    }

                    $query = "select f_fullname from vuniver.faculties where vuniver.faculties.f_id=" . $f;
                    $result = mysql_query ( $query );
                    if (!$result) {
                        $message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                        die($message);
                    }
                    while ($row = mysql_fetch_row($result))
                    {
                        echo ', ' . $row[0];
                    }
                    
                    $query = "select u_fullname, vuniver.university.u_id from vuniver.university, vuniver.faculties where vuniver.university.u_id=vuniver.faculties.u_id and vuniver.faculties.f_id=" . $f;	
                    $result = mysql_query ( $query );
                    if (!$result) {
                        $message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                        die($message);
                    }
                    while ($row = mysql_fetch_row($result))
                    {
                        echo ', ' . $row[0] . '. ( ' . $row[1] . '-' . $f . '-' . $s . ' )<br>';
                    }


                    $query = "select avg_contract_mark from vuniver.facult_spec where vuniver.facult_spec.f_id=" . $f . " and vuniver.facult_spec.s_id=" . $s;
                    $result = mysql_query ( $query );
                    if (!$result) {
                        $message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                        die($message);
                    }
                    while ($row = mysql_fetch_row($result))
                    {
                        $arr_c[$row[0]] += 1;
                        $total_c += 1;
                    }
                    echo "<div class='histogram'>";
                    $query = "select avg_budget_mark from vuniver.facult_spec where vuniver.facult_spec.f_id=" . $f . " and vuniver.facult_spec.s_id=" . $s;
                    $result = mysql_query ( $query );
                    if (!$result) {
                        $message  = '<h2>Error:</h2> ' . mysql_error() . "\n";
                        die($message);
                    }
                    while ($row = mysql_fetch_row($result))
                    {
                        $arr_b[$row[0]] += 1;
                        $total_b += 1;
                    }

            echo '<br><br><br>100';

		$counter = 100;
                $max = getMax($arr_b);
                while ( $counter <= 200 )
                {
                    $tmp = $arr_b[$counter];
                    $tmpPercent = $tmp/$total_b;
                    $tmpPercent *= 100;
                    $arr_b[$counter] = $arr_b[$counter]*$coeff;
                    $arr_b[$counter]+=1;

                    if ($tmp == $max) echo '<div class="moda">';
                    else echo '<div class="hist-wrap">';
                    echo '<div class="hist" data-short="' . $counter . '" data-title="' . $counter . '&nbspбаллов ' . $tmpPercent . '&nbsp% ('. $tmp .')"><img class="img" src="1.png" height="' . $arr_b[$counter] . '"/>';
		    if ($arr_b[$counter] > 1) echo '<div class="points">' . $counter .'</div>';
	            echo '</div>';
                    $counter += 1;
                    echo '</div>';

                }

                echo '200<br/><br/><br/>100';

		$counter = 100;
                $max = getMax($arr_c);
                while ( $counter <= 200 )
                {
                    $tmp = $arr_c[$counter];
                    $tmpPercent = $tmp/$total_c;
                    $tmpPercent *= 100;
                    $arr_c[$counter] = $arr_c[$counter]*$coeff;
                    $arr_c[$counter]+=1;

                    if ($tmp == $max) echo '<div class="moda">';
                    else echo '<div class="hist-wrap">';
                    echo '<div class="hist" data-short="' . $counter . '" data-title="' . $counter . '&nbspбаллов ' . $tmpPercent . '&nbsp% ('. $tmp .')"><img class="img" src="2.png" height="' . $arr_c[$counter] . '"/>';
                    if ($arr_c[$counter] > 1) echo '<div class="points">' . $counter .'</div>';
	            echo '</div>';
                    echo '</div>';

                    $counter += 1;
                }
                
                echo '200';
                echo '</div>';
            }
	    echo '<br/><br/><br/>';

            mysql_close($link);


        }
        else
        {
            echo 'Error: access denied';
        }
    }



?>